import React, {useState, useCallback, useRef, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import InputRegister from '../../components/InputRegister';
import InputSelected from '../../components/InputSelected';
import CheckBox from '../../components/CheckBox';
import InputMask from '../../components/InputMask';
import Selector from '../../components/Selector';
import Header from '../../components/Header';

import informations from '../../resources/informations.json';

import getValidationError from '../../utils/getValidationError';
import {useForm} from '../../hooks/form';
import api from '../../services/api';

import {Container, Content, Title, NextButton, TextNextButton} from './styles';

function DependentsForm() {
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setselectedBreed] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [personalDependetData, setPersonalDependetData] = useState();
  const [comorbidities, setComorbidities] = useState([]);
  const [listComorbidities, setListComorbidities] = useState([]);
  const [page, setPage] = useState(0);

  const navigation = useNavigation();
  const formRef = useRef();
  const {addList} = useForm();

  useEffect(() => {
    async function loadData() {
      const response = await api.get('comorbidities');
      setComorbidities(response.data);
    }

    loadData();
  }, []);

  const handleSelected = useCallback(
    (data) => {
      const {comorbidity_id, value} = data;
      if (!value) {
        const newList = listComorbidities.filter((id) => id !== comorbidity_id);
        setListComorbidities(newList);
      } else {
        if (!listComorbidities.includes(comorbidity_id)) {
          setListComorbidities([...listComorbidities, comorbidity_id]);
        }
      }
    },
    [setListComorbidities, listComorbidities],
  );

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          phone: Yup.string().required(),
          document_number: Yup.string().required(),
          birth_date: Yup.string().required(),
          birth_city: Yup.string().required(),
          mother_name: Yup.string(),
          father_name: Yup.string(),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        setPersonalDependetData({
          ...data,
          sex: selectedGender[0],
          phone_code: data.phone.toString().slice(0, 2),
          phone_number: data.phone.slice(2),
          birth_date: data.birth_date.toISOString().split('T')[0],
          nationality: selectedNationality,
          breed: selectedBreed,
          birth_state: selectedUF,
        });
        setPage(1);
      } catch (err) {
        const erros = getValidationError(err);
        console.log(erros);
        formRef.current?.setErrors(erros);
      }
    },
    [
      setPersonalDependetData,
      selectedGender,
      selectedBreed,
      selectedNationality,
      selectedUF,
    ],
  );

  const submitData = useCallback(() => {
    addList({
      ...personalDependetData,
      comorbidities: listComorbidities,
    });

    navigation.reset({
      index: 0,
      routes: [{name: 'ListDependents'}],
    });
  }, [personalDependetData, addList, listComorbidities, navigation]);

  return (
    <>
      <ScrollView>
        <Container>
          <Header title="Cadastro" arrow />
          <Content>
            {!page ? (
              <>
                <Title>Dados Pessoais</Title>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <InputRegister
                    title="Nome completo do dependente"
                    placeholder="Ex: Maria da silva Pereira"
                    name="name"
                  />

                  <InputMask
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99)',
                    }}
                    title="Telefone"
                    placeholder="(99) 99999-9999"
                    keyboardType="numeric"
                    name="phone"
                  />
                  <InputMask
                    title="CPF"
                    type="cpf"
                    placeholder="123.456.789-00"
                    keyboardType="numeric"
                    name="document_number"
                  />
                  <InputMask
                    type={'datetime'}
                    options={{
                      format: 'DD/MM/YYYY',
                    }}
                    title="Data de nascimento"
                    placeholder="01/01/1990"
                    keyboardType="numeric"
                    name="birth_date"
                  />
                  <InputSelected
                    selected={selectedNationality}
                    setSelected={setSelectedNationality}
                    title="Nacionalidade"
                    alternatives={['Brasileiro', 'Naturalizado', 'Estrangeiro']}
                  />
                  <InputRegister
                    title="Cidade de nascimento"
                    placeholder="Ex: Samambaia"
                    name="birth_city"
                  />
                  <Selector
                    title="UF"
                    selected={selectedUF}
                    setSelected={setSelectedUF}
                    items={informations.uf}
                  />

                  <InputSelected
                    selected={selectedGender}
                    setSelected={setSelectedGender}
                    title="Sexo"
                    alternatives={['Masculino', 'Feminino', 'Outros']}
                  />
                  <InputSelected
                    selected={selectedBreed}
                    setSelected={setselectedBreed}
                    title="Raça/Cor"
                    alternatives={[
                      'Negro',
                      'Pardo',
                      'Indígena',
                      'Branco',
                      'Amarelo',
                    ]}
                  />
                  <InputRegister
                    title="Nome completo da Mãe"
                    placeholder="Ex: Joana da Silva Pereira"
                    name="mother_name"
                  />
                  <InputRegister
                    title="Nome completo do Pai"
                    placeholder="Ex: João da Silva Pereira"
                    name="father_name"
                  />
                </Form>
                <NextButton onPress={() => formRef.current?.submitForm()}>
                  <TextNextButton>Próximo</TextNextButton>
                </NextButton>
              </>
            ) : (
              <>
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
                <NextButton onPress={submitData}>
                  <TextNextButton>Finalizar</TextNextButton>
                </NextButton>
              </>
            )}
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default DependentsForm;
