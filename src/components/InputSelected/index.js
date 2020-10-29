import React from 'react';

import {Container, Options, Option, TextOption, Title} from './styles';

function ButtonSelected({title, alternatives, selected, setSelected}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Options>
        {alternatives.map((element) => (
          <Option
            key={element}
            onPress={() => setSelected(element)}
            selected={selected === element}>
            <TextOption selected={selected === element}>{element}</TextOption>
          </Option>
        ))}
      </Options>
    </Container>
  );
}

export default ButtonSelected;
