import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f9fc;
`;
export const Item = styled.View`
  padding: 24px 16px;
  margin: 0 8px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: #586172;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;
export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  padding: 20px 0;
  align-items: center;
  background-color: #0484ea;
`;
export const TextConfirmButton = styled.Text`
  color: #e0eafc;
  font-size: 18px;
`;
export const FinishButton = styled.TouchableOpacity`
  flex: 1;
  padding: 20px 0;
  align-items: center;
  background-color: #1f93f0;
`;
export const TextFinishButton = styled.Text`
  color: #e0eafc;
  font-size: 18px;
`;
