import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff3f9;
`;
export const Content = styled.View`
  margin: 0px 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #0484ea;
  font-size: 36px;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: #838a95;
  margin: 12px 0;
  text-align: center;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ConfirmButton = styled(RectButton)`
  background-color: #0484ea;
  width: 160px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
export const TextConfirmButton = styled.Text`
  color: #e0eafc;
  font-size: 18px;
`;
export const FinishButton = styled(RectButton)`
  background-color: #0484ea;
  width: 160px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-left: 28px;
`;
export const TextFinishButton = styled.Text`
  color: #e0eafc;
  font-size: 18px;
`;
