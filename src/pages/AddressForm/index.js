import React, {useState, useCallback, useEffect, useRef} from 'react';
import {StatusBar, ScrollView, PermissionsAndroid} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {Form} from '@unform/mobile';
import axios from 'axios';
import * as Yup from 'yup';

import InputRegister from '../../components/InputRegister';
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

  const formRef = useRef();

  useEffect(() => {
    try {
      async function getLocationPermission() {
        const response = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Acessar minha localização',
            message: 'Minha UBS precisa acessar a sua localização',
            buttonPositive: 'Permitir',
            buttonNegative: 'Cancelar',
          },
        );
        return response;
      }

      const granted = getLocationPermission();
      Geolocation.getCurrentPosition(({coords}) =>
        console.log(coords.latitude, coords.longitude),
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(({coords}) =>
          console.log(coords.latitude, coords.longitude),
        );
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRequestCEP = useCallback(async (code) => {
    if (code.length === 8) {
      try {
        const {data} = await axios.get(
          `https://viacep.com.br/ws/${code}/json/`,
        );
        console.log(data);
        setSelectedUF((value) => data.uf);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        zip_code: Yup.string().required(),
        city: Yup.string().required(),
        address: Yup.string().required(),
        home: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // TODO: Salvar no contexto e enviar para a home
    } catch (error) {}
  }, []);

  const navigation = useNavigation();

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
              <Feather name="log-in" size={24} color="#FAFAFA" />
            </HeaderWrapper>

            <HeaderTitle>Preencha seus dados</HeaderTitle>
          </Header>
          <Content>
            <Title>Endereço</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputRegister
                title="CEP"
                maxLength={9}
                placeholder="Ex: 00000000"
                keyboardType="numeric"
                name="zip_code"
              />

              <City>
                <InputRegister
                  title="Cidade"
                  placeholder="Ex: Samambaia"
                  name="city"
                />
                <InputRegister
                  title="Endereço"
                  placeholder="Ex: Rua 01 São José"
                  name="address"
                />
                <InputRegister
                  title="Casa"
                  placeholder="Ex: Casa 10"
                  name="home"
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
