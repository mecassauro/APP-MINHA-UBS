import React, {useRef, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StatusBar, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import {ValidationError} from 'yup';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

import CurveSVG from '../../svg/CurveSVG';
import {useAlert} from '../../hooks/alert';

import Logo from '../../assets/img/logoUBS.png';

import {
  Container,
  Content,
  Header,
  Back,
  Title,
  SubTitle,
  Form,
  TitleForm,
  ButtonSubmit,
  TextButtonSubmit,
} from './styles';

import getValidationError from '../../utils/getValidationError';

import Input from '../../components/Input';

function SignUp() {
  const navigation = useNavigation();
  const {alert, close} = useAlert();
  const formRef = useRef();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo 6 caracteres'),
          confirm_password: Yup.string().min(6, 'Mínimo 6 caracteres'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        Object.assign(data, {user_type: 'COMMUNITY_PERSON'});

        alert({title: 'loading', type: 'loading'});
        await api.post('users', data);
        close();

        alert({
          title: 'Sucesso',
          type: 'success',
          message: 'Cadastro realizado com sucesso!',
        });
        setTimeout(() => {
          close();
          navigation.goBack();
        }, 3000);
      } catch (err) {
        if (err instanceof ValidationError) {
          const erros = getValidationError(err);
          console.log(erros);
          formRef.current?.setErrors(erros);
        } else {
          close();
          console.log(err.response.data.error);
          alert({
            title: 'Erro ao fazer cadastro',
            message: err.response.data.error,
          });
        }
      }
    },
    [navigation, alert, close],
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0C1EBB" />

      <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <CurveSVG />
            <Content>
              <Header>
                <Back onPress={() => navigation.goBack()}>
                  <Feather name="arrow-left" size={24} color="#fff" />
                </Back>
                <Image source={Logo} />
                <Title>Minha UBS</Title>
                <SubTitle>A sua UBS sempre perto de você</SubTitle>
              </Header>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <TitleForm>CADASTRAR</TitleForm>
                <Input
                  placeholder="Nome"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="user"
                  name="name"
                />
                <Input
                  keyboardType="email-address"
                  placeholder="E-mail"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="mail"
                  name="email"
                />
                <Input
                  secureTextEntry
                  placeholder="Senha"
                  icon="lock"
                  name="password"
                />
                <ButtonSubmit
                  style={{elevation: 3}}
                  onPress={() => formRef.current?.submitForm()}>
                  <TextButtonSubmit>CADASTRAR</TextButtonSubmit>
                </ButtonSubmit>
              </Form>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;
