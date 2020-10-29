import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin: 0px 16px 0px 8px;
`;

export const Icon = styled.View`
  background-color: #639bdc;
  height: 100%;
  width: 48px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;
