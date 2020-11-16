import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 0 8px;
  flex-direction: row;
  align-items: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

  border-width: 2px;
  border-color: #fff;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e41818;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

export const Icon = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
