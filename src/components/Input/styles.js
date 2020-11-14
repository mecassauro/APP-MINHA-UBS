import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

export const Icon = styled.View`
  height: 100%;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;
