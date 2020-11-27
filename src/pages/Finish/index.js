import React from 'react';
import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';

import confirmed from '../../assets/img/confirmed.png';

import {
  Container,
  Wrapper,
  Content,
  Title,
  SubTitle,
  RegisterButton,
  TextRegisterButton,
} from './styles';

function Finish() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Cadastro" />
      <Wrapper>
        <Content>
          <Image source={confirmed} style={{height: 220, width: 220}} />
          <Title>Parabéns!</Title>
          <SubTitle>
            O seu cadastro está finalizado, você já pode utilizar todos os
            recursos do aplicativo!
          </SubTitle>
        </Content>
        <RegisterButton
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'Home'}]})
          }>
          <TextRegisterButton>OK!</TextRegisterButton>
        </RegisterButton>
      </Wrapper>
    </Container>
  );
}

export default Finish;
