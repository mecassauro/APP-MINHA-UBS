import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: #f7f9fc;
  margin-bottom: 28px;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #7a7a7a;
  margin-bottom: 4px;
  margin-left: 8px;
`;

export const TextInput = styled.TextInput`
  border-radius: 8px;
  background-color: #f0f0f0;
  padding: 0px 16px;
  height: 100%;
  color: #4f4f4f;

  border-width: 2px;
  border-color: #dfdfdf;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #e41818;
    `}
`;
