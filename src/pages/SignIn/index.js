import React, {useRef, useCallback} from 'react';
import {StatusBar, KeyboardAvoidingView, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {ValidationError} from 'yup';

import {useAuth} from '../../hooks/auth';
import {useAlert} from '../../hooks/alert';
import getValidationError from '../../utils/getValidationError';

import CurveSVG from '../../svg/CurveSVG';

import Logo from '../../assets/img/logoUBS.png';

import {
  Container,
  Content,
  Header,
  Title,
  SubTitle,
  Form,
  TitleForm,
  ButtonSubmit,
  TextButtonSubmit,
  Forgot,
  TextForgot,
  CreateAccount,
  TextCreateAccount,
} from './styles';

import Input from '../../components/Input';

function SignIn() {
  const navigation = useNavigation();

  const {signIn} = useAuth();
  const {alert, close} = useAlert();
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

        alert({title: 'loading', type: 'loading'});
        await signIn(data);
        close();
      } catch (err) {
        if (err instanceof ValidationError) {
          const erros = getValidationError(err);
          console.log(erros);
          formRef.current?.setErrors(erros);
        } else {
          close();
          console.log(err.response.data.error);
          alert({
            title: 'Erro ao fazer login',
            message: err.response.data.error,
          });
        }
      }
    },
    [signIn, alert, close],
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0C1EBB" />

      <KeyboardAvoidingView style={{flex: 1}} enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <CurveSVG />
            <Content>
              <Header>
                <Image source={Logo} />
                <Title>Minha UBS</Title>
                <SubTitle>A sua UBS sempre perto de você!</SubTitle>
              </Header>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <TitleForm>LOGIN</TitleForm>
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
                  <TextButtonSubmit>ENTRAR</TextButtonSubmit>
                </ButtonSubmit>
                <Forgot>
                  <TextForgot>Esqueci minha senha</TextForgot>
                </Forgot>
              </Form>
              <CreateAccount onPress={() => navigation.navigate('SignUp')}>
                <TextCreateAccount>Criar conta</TextCreateAccount>
              </CreateAccount>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignIn;
