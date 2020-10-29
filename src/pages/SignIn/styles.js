import styled from 'styled-components/native';
import {Form as Unform} from '@unform/mobile';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 300px;
`;

export const LogoContainer = styled.View`
  background-color: #eff3f9;
  border-bottom-left-radius: 56px;
  border-bottom-right-radius: 56px;
  width: 100%;
  padding-top: 80px;
`;

export const Form = styled(Unform)`
  margin: 24px 24px 0;
`;

export const ButtonSubmit = styled(RectButton)`
  background-color: #eff3f9;
  height: 50px;
  margin: 12px 50px 0;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const TextButtonSubmit = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #0669b7;
`;

export const CreateAccount = styled.TouchableOpacity`
  background-color: #025ca4;
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextCreateAccount = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
`;
