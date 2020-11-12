import React, {useEffect, useRef, useCallback, forwardRef} from 'react';
import {useField} from '@unform/core';

import {Container, TextInput, Title} from './styles';

function InputRegister({title, name, onChangeText, rawValue, ...rest}, ref) {
  const {registerField, fieldName, defaultValue} = useField(name);
  const inputRef = useRef();
  const handleOnChange = useCallback(
    (text) => {
      if (inputRef.current) {
        inputRef.current.value = text;
      }
      if (onChangeText) {
        onChangeText(text);
      }
    },

    [onChangeText],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      getValue(refPath) {
        return rawValue || refPath.value;
      },
      setValue(refe, value) {
        refe.setNativeProps({text: value});
        inputRef.current.value = value;
      },
    });
  }, [registerField, fieldName, rawValue]);

  return (
    <Container>
      <Title>{title}</Title>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={handleOnChange}
        {...rest}
      />
    </Container>
  );
}

export default forwardRef(InputRegister);
