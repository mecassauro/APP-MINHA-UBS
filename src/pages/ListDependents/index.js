import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useAlert} from '../../hooks/alert';

import Header from '../../components/Header';
import {useForm} from '../../hooks/form';

import {
  Container,
  Item,
  Title,
  ButtonArea,
  ConfirmButton,
  TextConfirmButton,
  FinishButton,
  TextFinishButton,
} from './styles';

function ListDependents() {
  const {alert, close} = useAlert();
  const navigation = useNavigation();
  const {allDependents, submitAllDependents} = useForm();

  const submitList = useCallback(() => {
    alert({title: 'loading', type: 'loading'});
    submitAllDependents();
    close();
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }, [submitAllDependents, alert, close, navigation]);

  return (
    <Container>
      <Header title="cadastro" />
      {allDependents.map((dependents) => (
        <Item key={dependents.name} style={{elevation: 3}}>
          <Title>{dependents.name}</Title>
        </Item>
      ))}

      <ButtonArea>
        <FinishButton onPress={submitList}>
          <TextFinishButton>Finalizar</TextFinishButton>
        </FinishButton>

        <ConfirmButton>
          <TextConfirmButton
            onPress={() => navigation.navigate('DependentsForm')}>
            Adicionar outro
          </TextConfirmButton>
        </ConfirmButton>
      </ButtonArea>
    </Container>
  );
}

export default ListDependents;
