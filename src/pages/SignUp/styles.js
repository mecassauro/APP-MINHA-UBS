import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Form as Unform} from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 140px;
`;

export const Title = styled.Text`
  color: #eff3f9;
  font-size: 36px;
  width: 250px;
  margin: 80px 20px 0px;
`;

export const Form = styled(Unform)`
  margin: 24px 24px 0;
`;

export const ButtonSubmit = styled(RectButton)`
  background-color: #04d361;
  height: 50px;
  margin: 12px 50px 0;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
`;

export const TextButtonSubmit = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #eff3f9;
`;

export const Back = styled.TouchableOpacity`
  background-color: #025ca4;
  margin-top: auto;
  width: 100%;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextBack = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
`;
