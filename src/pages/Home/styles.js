import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f9fc;
`;

export const HeaderUser = styled.View`
  height: 80px;
  background-color: #0c1ebb;

  justify-content: space-between;
  flex-direction: row;
  padding: 20px 20px;
`;
export const Texts = styled.View`
  flex-direction: column;
`;
export const TextHeaderUser = styled.Text`
  color: #eff3f9;
  font-size: 13px;
`;
export const TextUBS = styled.Text`
  color: #eff3f9;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;
export const Content = styled.View`
  justify-content: center;
  margin: 0 30px;
  align-items: center;
`;
export const ContentUser = styled.View`
  margin: 0px 24px;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #0669b7;
  font-weight: bold;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 16px;
  color: #838a95;
  margin: 16px 0 32px;
  text-align: center;
`;

export const RegisterButton = styled(RectButton)`
  background-color: #0484ea;
  padding: 20px 40px;
  border-radius: 12px;
  width: 250px;
  margin: 0 auto;
`;

export const TextRegisterButton = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
