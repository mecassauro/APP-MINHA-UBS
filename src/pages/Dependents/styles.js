import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff3f9;
`;
export const Header = styled.View`
  background-color: #0669b7;
  height: 180px;
`;
export const Content = styled.View`
  background-color: #fff;
  margin: 0px 20px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  top: -75px;
`;

export const Title = styled.Text`
  color: #0669b7;
  font-size: 36px;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: #4f4f4f;
  margin: 24px 0 32px;
  text-align: center;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: -27px;
  justify-content: center;
`;
export const ConfirmButton = styled(RectButton)`
  background-color: #0669b7;
  padding: 20px 0px;
  width: 140px;
  align-items: center;
  border-radius: 12px;
`;
export const TextConfirmButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const FinishButton = styled(RectButton)`
  background-color: #0669b7;
  padding: 20px 0px;
  width: 140px;
  align-items: center;
  border-radius: 12px;
  margin-left: 28px;
`;
export const TextFinishButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
