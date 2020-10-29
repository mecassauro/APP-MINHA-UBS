import React, {useRef, useCallback} from 'react';
import {KeyboardAvoidingView, ScrollView, StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  Form,
  ButtonSubmit,
  TextButtonSubmit,
  Back,
  TextBack,
} from './styles';

import getValidationError from '../../utils/getValidationError';

import Input from '../../components/Input';

function SignUp() {
  const navigate = useNavigation();

  const formRef = useRef();

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required('Nome obrigatório'),
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
    } catch (err) {
      const erros = getValidationError(err);
      console.log(erros);
      formRef.current?.setErrors(erros);
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <Title>Faça o seu cadastro</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                placeholder="Nome"
                icon="user"
                name="username"
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
              <Input
                secureTextEntry
                placeholder="Confirmar senha"
                icon="lock"
                name="confirm_password"
              />
              <ButtonSubmit onPress={() => formRef.current?.submitForm()}>
                <TextButtonSubmit>Cadastrar</TextButtonSubmit>
              </ButtonSubmit>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Back onPress={() => navigate.goBack()}>
        <Feather name="arrow-left" size={24} color="#fff" />
        <TextBack>Voltar</TextBack>
      </Back>
    </>
  );
}

export default SignUp;
