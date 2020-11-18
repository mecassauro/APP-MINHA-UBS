import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import RadioChoice from '../../components/RadioChoice';
import Header from '../../components/Header';

import {useForm} from '../../hooks/form';
import {useAlert} from '../../hooks/alert';

import {
  Container,
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
  const {alert, close} = useAlert();
  const {handleSubmitHealthForm} = useForm();

  useEffect(() => {
    async function loadData() {
      const response = await api.get('comorbidities');
      setComorbidities(response.data);
    }

    loadData();
  }, []);

  const handleSelected = useCallback(
    (data) => {
      handleSubmitHealthForm(data);
    },
    [handleSubmitHealthForm],
  );

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <Container>
          <Header title="Cadastro" arrow />
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
