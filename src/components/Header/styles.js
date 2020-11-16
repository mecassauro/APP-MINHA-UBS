import styled from 'styled-components/native';

import Logout from '../../assets/icons/Logout';
import ArrowLeft from '../../assets/icons/ArrowLeft';

export const Container = styled.View`
  height: 80px;
  background-color: #0c1ebb;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;
export const Arrow = styled(ArrowLeft)`
  font-size: 24px;
  position: absolute;
  left: 0;
  margin-left: 16px;
`;
export const Log = styled(Logout)`
  position: absolute;
  right: 0;
  margin-right: 16px;
`;
