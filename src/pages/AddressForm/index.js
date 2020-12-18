import React, {useState, useCallback, useEffect, useRef} from 'react';
import {PermissionsAndroid, ScrollView, Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import geolocation from '@react-native-community/geolocation';

import {Form} from '@unform/mobile';
import axios from 'axios';
import * as Yup from 'yup';
import {ValidationError} from 'yup';

import getValidationError from '../../utils/getValidationError';
import InputRegister from '../../components/InputRegister';
import InputMask from '../../components/InputMask';
import InputSelected from '../../components/InputSelected';
import Selector from '../../components/Selector';
import Header from '../../components/Header';

import {useForm} from '../../hooks/form';
import {useAlert} from '../../hooks/alert';

import informations from '../../resources/informations.json';

import {
  Container,
  Content,
  Title,
  City,
  NextButton,
  TextNextButton,
} from './styles';

function AddressForm() {
  const [homeStatus, setHomeStatus] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [locationPermission, setLocationPermission] = useState(false);
  const [coord, setCoord] = useState({});
  const navigation = useNavigation();
  const formRef = useRef();
  const {handleSubmitAddressForm, handleSubmitData} = useForm();
  const {alert, close} = useAlert();

  const verifyLocationPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Minha UBS app permissão',
          message: 'Minha UBS App precisa acessar sua localização',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Permitir',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida');
        setLocationPermission(true);
      } else {
        console.log('Permissão NÃO concedida');
        setLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const getLocation = useCallback(() => {
    if (locationPermission) {
      try {
        geolocation.getCurrentPosition(
          ({coords}) => {
            console.log(coords);
            setCoord(coords);
          },
          (err) => {
            console.log(err.message);
          },
          {enableHighAccuracy: true, timeout: 120000, maximumAge: 1000},
        );
      } catch (err) {
        console.log('Tentando prosseguir sem permissão');
        console.log(err);
      }
    }
  }, [locationPermission]);

  useEffect(() => {
    verifyLocationPermission();
    setTimeout(() => {}, 5000);
    getLocation();
  }, [getLocation, verifyLocationPermission]);

  const handleRequestCEP = useCallback(
    async (code) => {
      console.log(code);
      if (code.length === 8) {
        try {
          alert({title: 'loading', type: 'loading'});
          const {data} = await axios.get(
            `https://viacep.com.br/ws/${code}/json/`,
          );

          setSelectedUF((value) => data.uf);
          formRef.current.setData({
            city: data.localidade,
            neighborhood: data.bairro,
            street: data.logradouro,
          });
          close();
        } catch (error) {
          console.log(error);
        }
      }
    },
    [alert, close],
  );

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          zip_code: Yup.string().required(),
          city: Yup.string().required(),
          street: Yup.string().required(),
          house_number: Yup.string().required(),
          neighborhood: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // TODO: Salvar no contexto e enviar para a home

        if (!coord.latitude && !coord.longitude) {
          Alert.alert(
            'Acesso ao GPS',
            'O aplicativo precisa da sua permissão para continuar.',
            [
              {
                text: 'Ok',
                onPress: () => {
                  verifyLocationPermission();
                  getLocation();
                },
              },
            ],
          );
          throw Error({message: 'Coordenadas não informadas'});
        }

        handleSubmitAddressForm({
          ...data,
          quantity_per_home: data.quantity_per_home
            ? Number(data.quantity_per_home)
            : 0,
          home_situation: homeStatus,
          state: selectedUF,
          lat: coord.latitude.toString(),
          lng: coord.longitude.toString(),
        });

        await handleSubmitData();
        console.log('FUNCIONOU');

        if (data.quantity_per_home) {
          navigation.reset({index: 0, routes: [{name: 'Dependents'}]});
        } else {
          navigation.reset({index: 0, routes: [{name: 'Finish'}]});
        }
      } catch (err) {
        if (err instanceof ValidationError) {
          const erros = getValidationError(err);
          console.log(erros);
          formRef.current?.setErrors(erros);
        } else {
          close();
          console.log(err.response.data.error);
          alert({
            title: 'Erro ao fazer cadastro da ficha',
            message: err.response.data.error,
          });
        }
      }
    },
    [
      handleSubmitAddressForm,
      homeStatus,
      selectedUF,
      navigation,
      coord,
      handleSubmitData,
      alert,
      close,
      verifyLocationPermission,
      getLocation,
    ],
  );

  return (
    <>
      <Header title="Cadastro" arrow />
      <ScrollView>
        <Container>
          <Content>
            <Title>Endereço</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputMask
                type={'zip-code'}
                title="CEP:"
                placeholder="Ex: 00000-000"
                keyboardType="numeric"
                name="zip_code"
                handleRequestCEP={handleRequestCEP}
              />

              <City>
                <InputRegister
                  title="Cidade:"
                  placeholder="Ex: Brasília"
                  name="city"
                />
                <InputRegister
                  title="Bairro:"
                  placeholder="Ex: Asa Norte"
                  name="neighborhood"
                />
                <InputRegister
                  title="Endereço:"
                  placeholder="Ex: SGAN 906"
                  name="street"
                />
                <InputRegister
                  title="Casa:"
                  placeholder="Ex: Casa 10"
                  name="house_number"
                />
                <Selector
                  title="UF:"
                  selected={selectedUF}
                  setSelected={setSelectedUF}
                  items={informations.uf}
                />
              </City>
              <InputSelected
                selected={homeStatus}
                setSelected={setHomeStatus}
                title="Situação de moradia:"
                alternatives={[
                  'Própria',
                  'Finaciado',
                  'Alugado',
                  'Morador de Rua',
                ]}
              />

              <InputRegister
                title="Quantas pessoas a mais moram na casa?"
                keyboardType="numeric"
                name="quantity_per_home"
              />
            </Form>

            <NextButton onPress={() => formRef.current?.submitForm()}>
              <TextNextButton>Finalizar</TextNextButton>
            </NextButton>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default AddressForm;
