import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';

import {Container, TextInput, Title} from './styles';

function InputRegister({title, name, ...rest}) {
  const {registerField, fieldName, defaultValue} = useField(name);
  const inputRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Title>{title}</Title>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
}

export default InputRegister;
