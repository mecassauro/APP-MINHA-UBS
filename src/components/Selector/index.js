import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import RNPicketSelector from 'react-native-picker-select';

import {Container, Title} from './styles';

function Selector({title, selected, setSelected, items}) {
  const formmatedItems = items.map((item) => ({
    label: item,
    value: item,
    key: item,
    color: '#9EA0A4',
  }));

  const handleChange = useCallback(
    (value) => {
      setSelected(value);
    },
    [setSelected],
  );

  return (
    <Container>
      <Title>{title}</Title>
      <RNPicketSelector
        placeholder={{label: 'Selecionar UF'}}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => handleChange(value)}
        items={formmatedItems}
        style={pickerSelectStyles}
      />
    </Container>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#dfdfdf',
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#4F4F4F',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Selector;
