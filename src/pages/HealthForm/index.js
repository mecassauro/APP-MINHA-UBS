import React, {useCallback} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import RadioChoice from '../../components/RadioChoice';

import informations from '../../resources/informations.json';

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

function HealthForm() {
  const navigation = useNavigation();
  const {handleSubmitHealthForm, healthFormData} = useForm();

  const handleSelected = useCallback(
    (data) => {
      handleSubmitHealthForm(data);
    },
    [handleSubmitHealthForm],
  );

  return (
    <>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <ScrollView>
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

            {informations.questions.map((question) => (
              <RadioChoice
                question={Object.keys(question)[0]}
                key={Object.keys(question)[0]}
                selected={handleSelected}
              />
            ))}
            <NextButton onPress={() => navigation.navigate('AddressForm')}>
              {/* <NextButton onPress={() => console.log(healthFormData)}> */}
              <TextNextButton>Próximo</TextNextButton>
            </NextButton>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default HealthForm;
