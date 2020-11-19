import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../hooks/auth';

import question from '../../assets/img/question.png';
import maintenance from '../../assets/img/maintenance.png';

import Notification from '../../components/Notification';
import Header from '../../components/Header';

import Logout from '../../assets/icons/Logout';

import {
  Container,
  HeaderUser,
  Texts,
  TextHeaderUser,
  TextUBS,
  Content,
  Wrapper,
  ContentUser,
  Title,
  SubTitle,
  RegisterButton,
  TextRegisterButton,
} from './styles';
import api from '../../services/api';

function Home() {
  const {signOut, user} = useAuth();
  const [register, setRegister] = useState({});
  const [notification, setNotification] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const {data} = await api.get(`/forms/${user.id}`);
      setRegister(data);
    }
    loadData();
  }, [user]);

  return (
    <>
      {!register ? (
        <Container>
          <Header title="Minha UBS" logout />
          <Wrapper>
            <Content>
              <Image source={question} style={{height: 220, width: 220}} />
              <Title>Você ainda não tem o cadastro em uma UBS?</Title>
              <SubTitle>
                Faça agora mesmo o seu cadastro e encontre a sua UBS!
              </SubTitle>
            </Content>
            <RegisterButton onPress={() => navigation.navigate('PersonalForm')}>
              <TextRegisterButton>Faça o seu Cadstro</TextRegisterButton>
            </RegisterButton>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Header title="Minha UBS" logout />
          <Wrapper>
            <Content>
              <Image source={maintenance} style={{height: 220, width: 220}} />
              <Title style={{fontSize: 36}}>Em construção</Title>
              <SubTitle>
                Estamos trabalhando para construir uma plataforma que melhor
                atenda você!
              </SubTitle>
            </Content>
          </Wrapper>
        </Container>
        // <Container>
        //   <HeaderUser>
        //     <Texts>
        //       <TextHeaderUser>Sua UBS:</TextHeaderUser>
        //       <TextUBS>Taguatinga, UBS 01</TextUBS>
        //     </Texts>
        //     <Logout onPress={signOut} />
        //   </HeaderUser>
        //   <ContentUser>
        //     <Notification
        //       title="Vacinação"
        //       description="Chegou a hora de vacianar a sua criança! A Unidade Básica de Saúde começou o período de vacinação."
        //       date="20/12"
        //       color="#0484EA"
        //     />
        //     <Notification
        //       title="Atenção!"
        //       description="A UBS estará fechada excepcionalmente no dia 16/10 para reparos. Agradecemos a compreensão!"
        //       date="16/10"
        //       color="#EA2D04"
        //     />
        //     <Notification
        //       title="Medicação"
        //       description="A UBS está com o seu estoque de medicação renovado!"
        //       color="#04CA6B"
        //     />
        //     <Notification
        //       title="Vacinação"
        //       description="Chegou a hora de vacianar a sua criança! A Unidade Básica de Saúde começou o período de vacinação."
        //       date="20/12"
        //       color="#0484EA"
        //     />
        //   </ContentUser>
        // </Container>
      )}
    </>
  );
}

export default Home;
