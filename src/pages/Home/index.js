import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import {useAuth} from '../../hooks/auth';
import ImgQuestion from '../../assets/question.svg';

import Notification from '../../components/Notification';

import {
  Container,
  Header,
  HeaderUser,
  Texts,
  TextHeaderUser,
  TextUBS,
  Content,
  ContentUser,
  Title,
  SubTitle,
  RegisterButton,
  TextRegisterButton,
} from './styles';

function Home() {
  const {signOut, register} = useAuth();
  const [notification, setNotification] = useState([]);
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      {!register ? (
        <Container>
          <Header />
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
      ) : (
        <Container>
          <HeaderUser>
            <Texts>
              <TextHeaderUser>Sua UBS:</TextHeaderUser>
              <TextUBS>Taguatinga, UBS 01</TextUBS>
            </Texts>
            <Feather
              onPress={() => signOut()}
              name="log-in"
              size={24}
              color="#FAFAFA"
            />
          </HeaderUser>
          <ContentUser>
            <Notification
              title="Vacinação"
              description="Chegou a hora de vacianar a sua criança! A Unidade Básica de Saúde começou o período de vacinação."
              date="20/12"
              color="#0484EA"
            />
            <Notification
              title="Atenção!"
              description="A UBS estará fechada excepcionalmente no dia 16/10 para reparos. Agradecemos a compreensão!"
              date="16/10"
              color="#EA2D04"
            />
            <Notification
              title="Medicação"
              description="A UBS está com o seu estoque de medicação renovado!"
              color="#04CA6B"
            />
            <Notification
              title="Vacinação"
              description="Chegou a hora de vacianar a sua criança! A Unidade Básica de Saúde começou o período de vacinação."
              date="20/12"
              color="#0484EA"
            />
          </ContentUser>
        </Container>
      )}
    </>
  );
}

export default Home;
