import React, {useState, useCallback} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {Container, Question, Alternatives} from './styles';

function Check({question, selected, comorbidity_id}) {
  const [checked, setChecked] = useState(false);

  const toggleChoice = useCallback(
    (value) => {
      setChecked(value);
      selected({comorbidity_id, value});
    },
    [selected, comorbidity_id],
  );

  return (
    <Container>
      <Alternatives>
        <CheckBox
          disabled={false}
          value={checked}
          onChange={() => toggleChoice(!checked)}
          tintColors={{true: '#04d361'}}
        />
      </Alternatives>
      <Question>{question}</Question>
    </Container>
  );
}

export default Check;
