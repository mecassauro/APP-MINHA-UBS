import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff3f9;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #0669b7;
  height: 180px;
  width: 100%;
  align-items: flex-end;
  padding: 30px 20px 0px;
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
  font-size: 24px;
  color: #0669b7;
  font-weight: bold;
  margin-top: 24px;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  color: #4f4f4f;
  margin: 24px 0 32px;
`;

export const RegisterButton = styled(RectButton)`
  background-color: #0669b7;
  padding: 20px 40px;
  border-radius: 12px;
  margin-top: -40px;
`;

export const TextRegisterButton = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
