import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAlert} from '../../hooks/alert';

import Header from '../../components/Header';
import Trash from '../../assets/icons/Trash';
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
  const {allDependents, submitAllDependents, removeList} = useForm();

  const submitList = useCallback(async () => {
    alert({title: 'loading', type: 'loading'});
    try {
      await submitAllDependents();
    } catch (error) {
      close();
      alert({
        title: 'Erro ao fazer cadastro da ficha',
        message: error.response.data.error,
      });
    }
    close();
    navigation.reset({
      index: 0,
      routes: [{name: 'Finish'}],
    });
  }, [submitAllDependents, alert, close, navigation]);

  return (
    <Container>
      <Header title="cadastro" />
      <ScrollView style={{flex: 1}}>
        {allDependents.map((dependents, index) => (
          <Item key={dependents.name} style={{elevation: 3}}>
            <Title>{`${index + 1}. ${dependents.name}`}</Title>
            <Trash onPress={() => removeList(dependents.name)} />
          </Item>
        ))}
      </ScrollView>
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
