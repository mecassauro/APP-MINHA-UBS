import React, {useState, useCallback} from 'react';
import {RadioButton} from 'react-native-paper';
import {Container, Question, Alternatives} from './styles';

function RadioChoice({question, selected}) {
  const [checked, setChecked] = useState(false);

  const toggleChoice = useCallback(
    (value) => {
      setChecked(value);
      const data = {};
      data[question] = value;
      selected(data);
    },
    [question, selected],
  );

  return (
    <Container>
      <Question>{question}</Question>
      <Alternatives>
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
      </Alternatives>
    </Container>
  );
}

export default RadioChoice;
