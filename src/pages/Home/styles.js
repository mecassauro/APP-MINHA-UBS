import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff3f9;
`;

export const Header = styled.View`
  background-color: #0669b7;
  height: 180px;
  width: 100%;
  align-items: flex-start;
  padding: 30px 20px 0px;
`;
export const HeaderUser = styled.View`
  background-color: #0669b7;
  height: 120px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 40px 20px 0px;
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
  background-color: #fff;
  margin: 0px 20px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  top: -75px;
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
  width: 250px;
  margin: 0 auto;
  margin-top: -40px;
`;

export const TextRegisterButton = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
