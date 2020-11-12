import React, {useRef, useCallback} from 'react';
import {StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {ValidationError} from 'yup';

import {useAuth} from '../../hooks/auth';
import getValidationError from '../../utils/getValidationError';

import Logo from '../../assets/image.svg';

import {
  Container,
  LogoContainer,
  Form,
  ButtonSubmit,
  TextButtonSubmit,
  CreateAccount,
  TextCreateAccount,
} from './styles';

import Input from '../../components/Input';

function SignIn() {
  const navigation = useNavigation();

  const {signIn} = useAuth();
  const formRef = useRef();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo 6 caracteres'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn(data);
      } catch (err) {
        if (err instanceof ValidationError) {
          const erros = getValidationError(err);
          console.log(erros);
          formRef.current?.setErrors(erros);
        }
        console.log(err);
      }
    },
    [signIn],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#eff3f9" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={0}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <LogoContainer>
              <Logo height={300} />
            </LogoContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                keyboardType="email-address"
                name="email"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail"
              />
              <Input
                secureTextEntry
                placeholder="Senha"
                icon="lock"
                name="password"
              />
              <ButtonSubmit onPress={() => formRef.current?.submitForm()}>
                <TextButtonSubmit>Entrar</TextButtonSubmit>
              </ButtonSubmit>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccount onPress={() => navigation.navigate('SignUp')}>
        <Feather name="log-in" size={24} color="#fff" />
        <TextCreateAccount>Criar conta</TextCreateAccount>
      </CreateAccount>
    </>
  );
}

export default SignIn;
