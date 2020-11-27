import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f7f9fc;
  height: 100%;
`;

export const Content = styled.View`
  width: 100%;
  border-radius: 16px;
  justify-content: center;
  padding: 16px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #7a7a7a;
  margin: 16px 0px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: #dfdfdf;
`;
export const Divider = styled.View`
  background-color: #dfdfdf;
  height: 1px;
  margin-top: 12px;
`;
export const NextButton = styled(RectButton)`
  background-color: #04d361;
  border-radius: 8px;
  padding: 12px 0px;
  margin: 0px 60px 24px;
  justify-content: center;
  align-items: center;
`;

export const TextNextButton = styled.Text`
  color: #eff3f9;
  font-size: 16px;
`;
