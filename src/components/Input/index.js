import React, {useEffect, useRef} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {useField} from '@unform/core';

import {Container, TextInput, Icon} from './styles';

function Input({name, icon, ...rest}) {
  const {registerField, fieldName, defaultValue = ''} = useField(name);
  const inputRef = useRef();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(refe, value) {
        inputRef.current.value = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon>
        <Feather name={icon} color="#fff" size={24} />
      </Icon>
      <TextInput
        ref={inputRef}
        onChangeText={(value) => {
          inputRef.current.value = value;
        }}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
}

export default Input;
