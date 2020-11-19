import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

import checklist from '../../assets/img/checklist.png';

import {
  Container,
  Wrapper,
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
      <Header title="Cadastro" />
      <Wrapper>
        <Content>
          <Image source={checklist} />
          <Title>Cadastrar</Title>
          <Description>
            Há pessoas que moram junto com você, deseja fazer o cadastro da
            ficha dos dependentes?
          </Description>
        </Content>

        <ButtonArea>
          <ConfirmButton>
            <TextConfirmButton
              onPress={() => navigation.navigate('DependentsForm')}>
              Cadastrar
            </TextConfirmButton>
          </ConfirmButton>
          <FinishButton onPress={() => navigation.navigate('Home')}>
            <TextFinishButton>Finalizar</TextFinishButton>
          </FinishButton>
        </ButtonArea>
      </Wrapper>
    </Container>
  );
}

export default Dependents;
