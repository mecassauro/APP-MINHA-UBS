import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Checklist from '../../assets/checklist.svg';

import {
  Container,
  Header,
  Content,
  Title,
  Description,
  ButtonArea,
  ConfirmButton,
  TextConfirmButton,
  FinishButton,
  TextFinishButton,
} from './styles';

function Dependents() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Content>
        <Checklist />
        <Title>Dependentes</Title>
        <Description>
          Há pessoas que moram junto com você, deseja fazer o cadastro da ficha
          dos dependentes?
        </Description>
      </Content>

      <ButtonArea>
        <ConfirmButton>
          <TextConfirmButton>Cadastrar</TextConfirmButton>
        </ConfirmButton>
        <FinishButton onPress={() => navigation.navigate('Home', {show: true})}>
          <TextFinishButton>Finalizar</TextFinishButton>
        </FinishButton>
      </ButtonArea>
    </Container>
  );
}

export default Dependents;
