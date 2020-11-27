import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import CheckBox from '../../components/CheckBox';
import Header from '../../components/Header';

import {useForm} from '../../hooks/form';
import {useAlert} from '../../hooks/alert';

import {
  Container,
  Content,
  Title,
  NextButton,
  Divider,
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
      // alert({title: 'loading', type: 'loading'});
      const response = await api.get('comorbidities');
      setComorbidities(response.data);
      // close();
    }
    loadData();
  }, [alert, close]);

  const handleSelected = useCallback(
    (data) => {
      handleSubmitHealthForm(data);
    },
    [handleSubmitHealthForm],
  );
  return (
    <>
      <Header title="Cadastro" arrow style={{elevation: 3}} />
      <ScrollView style={{flex: 1}}>
        <Container>
          <Content>
            <Title>Situação de Saúde</Title>
            {comorbidities &&
              comorbidities.map((comorbidity) => (
                <CheckBox
                  question={comorbidity.question}
                  key={comorbidity.id}
                  comorbidity_id={comorbidity.id}
                  selected={handleSelected}
                />
              ))}
            <Divider />
          </Content>
          <NextButton onPress={() => navigation.navigate('AddressForm')}>
            <TextNextButton>Próximo</TextNextButton>
          </NextButton>
        </Container>
      </ScrollView>
    </>
  );
}

export default HealthForm;
