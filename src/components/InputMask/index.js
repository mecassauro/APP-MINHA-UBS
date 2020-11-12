import React, {useCallback, useState} from 'react';
import {TextInputMask} from 'react-native-masked-text';

import InputRegister from '../InputRegister';

function InputMask({type, icon, handleRequestCEP = undefined, ...rest}) {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback(
    (maskedValue, unmaskedValue) => {
      setValue(maskedValue);
      if (handleRequestCEP) {
        handleRequestCEP(unmaskedValue);
      }
      setRawValue(unmaskedValue);
    },
    [handleRequestCEP],
  );

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={InputRegister}
      customTextInputProps={{
        rawValue,
        ...rest,
      }}
      {...rest}
    />
  );
}

export default InputMask;
