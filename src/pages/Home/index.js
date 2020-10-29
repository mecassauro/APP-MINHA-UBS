import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
import ImgQuestion from '../../assets/question.svg';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Content,
  Title,
  SubTitle,
  RegisterButton,
  TextRegisterButton,
} from './styles';

function Home() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <Container>
        <Header>
          <Feather name="log-in" size={24} color="#FAFAFA" />
        </Header>
        <Content>
          <ImgQuestion />
          <Title>Você ainda não tem o cadastro em uma UBS?</Title>
          <SubTitle>
            Faça agora mesmo o seu cadastro e encontre a sua UBS
          </SubTitle>
        </Content>
        <RegisterButton onPress={() => navigation.navigate('PersonalForm')}>
          <TextRegisterButton>Faça o seu Cadstro</TextRegisterButton>
        </RegisterButton>
      </Container>
    </>
  );
}

export default Home;
