import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #7a7a7a;
  margin-bottom: 4px;
  margin-left: 8px;
`;

export const Options = styled.View`
  border-width: 1px;
  border-color: #dfdfdf;
  height: 50px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

export const Option = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0px 8px;
  background-color: ${(props) => (props.selected ? '#0669b7' : 'transparent')};
`;

export const TextOption = styled.Text`
  color: ${(props) => (props.selected ? '#fff' : '#4f4f4f')};
  font-size: 12px;
  text-align: center;
`;
