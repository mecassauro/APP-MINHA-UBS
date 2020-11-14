import styled from 'styled-components/native';
import {Form as Unform} from '@unform/mobile';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f9fc;
  height: 100%;
  width: 100%;
`;
export const Content = styled.View`
  position: absolute;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 20px;
`;

export const Header = styled.View`
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
export const Back = styled(RectButton)`
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 5px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const SubTitle = styled.Text`
  color: #d5ddef;
  font-size: 18px;
  font-weight: 400;
`;
export const Form = styled(Unform)`
  align-items: center;
  margin: auto 0;
`;
export const TitleForm = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #f7f9fc;
`;
export const ButtonSubmit = styled(RectButton)`
  height: 56px;
  width: 250px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export const TextButtonSubmit = styled.Text`
  color: #2272ec;
  font-weight: bold;
  font-size: 20px;
`;
export const Forgot = styled.TouchableOpacity`
  margin-top: 32px;
`;
export const TextForgot = styled.Text`
  font-size: 13px;
  color: #1532cb;
`;
export const CreateAccount = styled.TouchableOpacity``;
export const TextCreateAccount = styled.Text`
  font-size: 14px;
  color: #8a8d97;
  font-weight: bold;
`;
