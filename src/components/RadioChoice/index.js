import React, {useState, useCallback} from 'react';
// import {RadioButton} from 'react-native-paper';
import {Container, Question, Alternatives} from './styles';

function RadioChoice({question, selected, comorbidity_id}) {
  const [checked, setChecked] = useState(false);

  const toggleChoice = useCallback(
    (value) => {
      console.log(comorbidity_id);
      setChecked(value);
      selected({comorbidity_id, value});
    },
    [selected, comorbidity_id],
  );

  return (
    <Container>
      <Question>{question}</Question>
      {/* <Alternatives>
        <RadioButton
          color="#00C853"
          value={true}
          status={checked === true ? 'checked' : 'unchecked'}
          onPress={() => toggleChoice(true)}
        />
        <RadioButton
          color="#00C853"
          value={false}
          status={checked === false ? 'checked' : 'unchecked'}
          onPress={() => toggleChoice(false)}
        />
      </Alternatives> */}
    </Container>
  );
}

export default RadioChoice;
