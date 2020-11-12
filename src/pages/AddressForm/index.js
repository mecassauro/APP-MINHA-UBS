import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StatusBar, ScrollView} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import geolocation from '@react-native-community/geolocation';

import {Form} from '@unform/mobile';
import axios from 'axios';
import * as Yup from 'yup';

import getValidationError from '../../utils/getValidationError';
import InputRegister from '../../components/InputRegister';
import InputMask from '../../components/InputMask';
import InputSelected from '../../components/InputSelected';
import Selector from '../../components/Selector';

import {useForm} from '../../hooks/form';

import informations from '../../resources/informations.json';

import {
  Container,
  Header,
  HeaderWrapper,
  HeaderTitle,
  Content,
  Title,
  City,
  NextButton,
  TextNextButton,
} from './styles';

function AddressForm() {
  const [homeStatus, setHomeStatus] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [coord, setCoord] = useState({});
  const navigation = useNavigation();
  const formRef = useRef();
  const {handleSubmitAddressForm, healthFormData, handleSubmitData} = useForm();

  useEffect(() => {
    console.log(healthFormData);

    geolocation.getCurrentPosition(
      ({coords}) => {
        console.log(coords);
        setCoord(coords);
      },
      (err) => {
        console.log(err.message);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [healthFormData]);

  const handleRequestCEP = useCallback(async (code) => {
    console.log(code);
    if (code.length === 8) {
      try {
        const {data} = await axios.get(
          `https://viacep.com.br/ws/${code}/json/`,
        );

        setSelectedUF((value) => data.uf);
        formRef.current.setData({
          city: data.localidade,
          neighborhood: data.bairro,
          street: data.logradouro,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          zip_code: Yup.string().required(),
          city: Yup.string().required(),
          street: Yup.string().required(),
          house_number: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        console.log('HI');

        // TODO: Salvar no contexto e enviar para a home
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

        await handleSubmitData({
          ...data,
          quantity_per_home: data.quantity_per_home
            ? Number(data.quantity_per_home)
            : 0,
          home_situation: homeStatus,
          state: selectedUF,
          lat: coord.latitude.toString(),
          lng: coord.longitude.toString(),
        });

        if (data.quantity_per_home) {
          navigation.navigate('Dependents');
        } else {
          navigation.navigate('Home');
        }
      } catch (err) {
        console.log(err);
        const erros = getValidationError(err);
        console.log(erros);
        formRef.current?.setErrors(erros);
      }
    },
    [
      handleSubmitAddressForm,
      homeStatus,
      selectedUF,
      navigation,
      coord,
      handleSubmitData,
    ],
  );

  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <ScrollView>
        <Container>
          <Header>
            <HeaderWrapper>
              <Feather
                onPress={() => navigation.goBack()}
                name="arrow-left"
                size={24}
                color="#FAFAFA"
              />
            </HeaderWrapper>

            <HeaderTitle>Preencha seus dados</HeaderTitle>
          </Header>
          <Content>
            <Title>Endereço</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputMask
                type={'zip-code'}
                title="CEP"
                placeholder="Ex: 00000-000"
                keyboardType="numeric"
                name="zip_code"
                handleRequestCEP={handleRequestCEP}
              />

              <City>
                <InputRegister
                  title="Cidade"
                  placeholder="Ex: Brasília"
                  name="city"
                />
                <InputRegister
                  title="Bairro"
                  placeholder="Ex: Asa Norte"
                  name="neighborhood"
                />
                <InputRegister
                  title="Endereço"
                  placeholder="Ex: SGAN 906"
                  name="street"
                />
                <InputRegister
                  title="Casa"
                  placeholder="Ex: Casa 10"
                  name="house_number"
                />
                <Selector
                  title="UF"
                  selected={selectedUF}
                  setSelected={setSelectedUF}
                  items={informations.uf}
                />
              </City>
              <InputSelected
                selected={homeStatus}
                setSelected={setHomeStatus}
                title="Situação de moradia"
                alternatives={[
                  'Própria',
                  'Finaciado',
                  'Alugado',
                  'Morador de Rua',
                ]}
              />

              <InputRegister
                title="Quantas pessoas moram na casa?"
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
