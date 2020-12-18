import React, {useState, useCallback, useRef} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import {Form} from '@unform/mobile';
import * as Yup from 'yup';
import {ValidationError} from 'yup';

import InputRegister from '../../components/InputRegister';
import InputMask from '../../components/InputMask';
import InputSelected from '../../components/InputSelected';
import Selector from '../../components/Selector';
import Header from '../../components/Header';

import informations from '../../resources/informations.json';

import getValidationError from '../../utils/getValidationError';
import {useForm} from '../../hooks/form';

import {
  Container,
  Content,
  Title,
  City,
  NextButton,
  TextNextButton,
  CheckBoxItem,
  CheckBoxTitle,
} from './styles';

function PersonalForm() {
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBreed, setselectedBreed] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [studant, setStudant] = useState(false);
  const [deficient, setDeficient] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [interned, setInterned] = useState(false);

  const navigation = useNavigation();
  const formRef = useRef();
  const {handleSubmitPersonalForm} = useForm();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          full_name: Yup.string().required(),
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

        // TODO: Salvar tudo no Contexto

        handleSubmitPersonalForm({
          ...data,
          sex: selectedGender[0],
          phone_code: data.phone.toString().slice(0, 2),
          phone_number: data.phone.slice(2),
          birth_date: data.birth_date.toISOString().split('T')[0],
          nationality: selectedNationality,
          breed: selectedBreed,
          birth_state: selectedUF,
          studant,
          deficient,
          pregnant,
          interned,
        });

        navigation.navigate('HealthForm');
      } catch (err) {
        if (err instanceof ValidationError) {
          const erros = getValidationError(err);
          console.log(erros);
          formRef.current?.setErrors(erros);
        }
        if (err instanceof RangeError) {
          formRef.current?.setFieldError('birth_date', 'Data não válida');
        }
      }
    },
    [
      navigation,
      handleSubmitPersonalForm,
      selectedGender,
      selectedBreed,
      selectedNationality,
      selectedUF,
      studant,
      deficient,
      pregnant,
      interned,
    ],
  );

  return (
    <>
      <Header title="Cadastro" arrow />
      <ScrollView>
        <Container>
          <Content>
            <Title>Dados Pessoais</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <InputRegister
                title="Nome completo do resposável:"
                placeholder="Ex: Maria da silva Pereira"
                name="full_name"
              />

              <InputMask
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99)',
                }}
                title="Telefone:"
                placeholder="(99) 99999-9999"
                keyboardType="numeric"
                name="phone"
              />
              <InputMask
                title="CPF:"
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
                title="Data de nascimento:"
                placeholder="01/01/1990"
                keyboardType="numeric"
                name="birth_date"
              />
              <InputSelected
                selected={selectedNationality}
                setSelected={setSelectedNationality}
                title="Nacionalidade:"
                alternatives={['Brasileiro', 'Naturalizado', 'Estrangeiro']}
              />
              <City>
                <InputRegister
                  title="Cidade de nascimento:"
                  placeholder="Ex: Samambaia"
                  name="birth_city"
                />
                <Selector
                  title="UF:"
                  selected={selectedUF}
                  setSelected={setSelectedUF}
                  items={informations.uf}
                />
              </City>

              <InputSelected
                selected={selectedGender}
                setSelected={setSelectedGender}
                title="Sexo:"
                alternatives={['Masculino', 'Feminino', 'Outros']}
              />
              <InputSelected
                selected={selectedBreed}
                setSelected={setselectedBreed}
                title="Raça/Cor:"
                alternatives={[
                  'Negro',
                  'Pardo',
                  'Indígena',
                  'Branco',
                  'Amarelo',
                ]}
              />
              <InputRegister
                title="Nome completo da Mãe:"
                placeholder="Ex: Joana da Silva Pereira"
                name="mother_name"
              />
              <InputRegister
                title="Nome completo do Pai:"
                placeholder="Ex: João da Silva Pereira"
                name="father_name"
              />
              <CheckBoxItem>
                <CheckBox
                  disabled={false}
                  value={studant}
                  onChange={() => setStudant((value) => !value)}
                  tintColors={{true: '#04d361'}}
                />
                <CheckBoxTitle>Frequenta escola ou creche?</CheckBoxTitle>
              </CheckBoxItem>
              <CheckBoxItem>
                <CheckBox
                  disabled={false}
                  value={deficient}
                  onChange={() => setDeficient((value) => !value)}
                  tintColors={{true: '#04d361'}}
                />
                <CheckBoxTitle>Tem alguma deficiência?</CheckBoxTitle>
              </CheckBoxItem>
              <CheckBoxItem>
                <CheckBox
                  disabled={false}
                  value={pregnant}
                  onChange={() => setPregnant((value) => !value)}
                  tintColors={{true: '#04d361'}}
                />
                <CheckBoxTitle>Está gestante?</CheckBoxTitle>
              </CheckBoxItem>
              <CheckBoxItem>
                <CheckBox
                  disabled={false}
                  value={interned}
                  onChange={() => setInterned((value) => !value)}
                  tintColors={{true: '#04d361'}}
                />
                <CheckBoxTitle>
                  Teve alguma internação nos últimos 12 meses?
                </CheckBoxTitle>
              </CheckBoxItem>
            </Form>
            <NextButton onPress={() => formRef.current?.submitForm()}>
              <TextNextButton>Próximo</TextNextButton>
            </NextButton>
          </Content>
        </Container>
      </ScrollView>
    </>
  );
}

export default PersonalForm;
