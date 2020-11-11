import React, {useCallback, useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import RadioChoice from '../../components/RadioChoice';

import {useForm} from '../../hooks/form';

import {
  Container,
  Header,
  HeaderWrapper,
  HeaderTitle,
  Content,
  Title,
  Complements,
  TextComplements,
  NextButton,
  TextNextButton,
} from './styles';
import api from '../../services/api';

function HealthForm() {
  const [comorbidities, setComorbidities] = useState([]);
  const navigation = useNavigation();
  const {handleSubmitHealthForm} = useForm();

  useEffect(() => {
    async function loadData() {
      const response = await api.get('comorbidities');
      setComorbidities(response.data);
    }
    loadData();
  });

  const handleSelected = useCallback(
    (data) => {
      handleSubmitHealthForm(data);
    },
    [handleSubmitHealthForm],
  );

  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <ScrollView style={{flex: 1}}>
        <Container>
          <Header>
            <HeaderWrapper>
              <Feather
                onPress={() => navigation.goBack()}
                name="arrow-left"
                size={24}
                color="#FAFAFA"
              />
              <Feather name="log-in" size={24} color="#FAFAFA" />
            </HeaderWrapper>

            <HeaderTitle>Preencha seus dados </HeaderTitle>
          </Header>
          <Content>
            <Title>Situação de Saúde</Title>
            <Complements>
              <TextComplements>Sim</TextComplements>
              <TextComplements>Não</TextComplements>
            </Complements>

            {comorbidities &&
              comorbidities.map((comorbidity) => (
                <RadioChoice
                  question={comorbidity.question}
                  key={comorbidity.id}
                  comorbidity_id={comorbidity.id}
                  selected={handleSelected}
                />
              ))}
            <NextButton onPress={() => navigation.navigate('AddressForm')}>
              <TextNextButton>Próximo</TextNextButton>
            </NextButton>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default HealthForm;
