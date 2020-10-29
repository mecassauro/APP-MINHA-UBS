import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #eff3f9;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #0669b7;
  height: 250px;
  width: 100%;
  padding: 30px 20px 0px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 36px;
  color: #eff3f9;
  width: 280px;
`;

export const Content = styled.View`
  background-color: #fff;
  width: 95%;

  border-radius: 16px;
  justify-content: center;
  padding: 20px;
  position: relative;
  top: -75px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #7a7a7a;
  margin: 16px 0px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: #dfdfdf;
`;
export const Complements = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: 8px;
`;
export const TextComplements = styled.Text`
  font-size: 12px;
  color: #7a7a7a;
  margin-left: 18px;
  font-weight: bold;
`;

export const NextButton = styled(RectButton)`
  background-color: #04d361;
  border-radius: 8px;
  padding: 12px 0px;
  margin: 24px 60px 0px;
  justify-content: center;
  align-items: center;
`;

export const TextNextButton = styled.Text`
  color: #eff3f9;
  font-size: 16px;
`;
