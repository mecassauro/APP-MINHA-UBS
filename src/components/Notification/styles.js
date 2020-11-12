import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffff;
  width: 100%;
  height: 176px;
  margin-top: 20px;
  border-radius: 8px;
  flex-direction: column;
`;

export const Information = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 24px;
  width: 75%;
`;
export const Title = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #4f4f4f;
`;
export const Description = styled.Text`
  font-size: 13px;
  color: #7a7a7a;
  text-align: left;
`;
export const DateArea = styled.View`
  height: 100%;
  position: absolute;
  right: 0px;
  margin: 0 16px;
  justify-content: center;
  align-items: center;
`;
export const TextDateArea = styled.Text`
  color: #eff3f9;
  font-size: 16px;
  font-weight: normal;
`;

export const TextDate = styled.Text`
  color: #eff3f9;
  font-size: 24px;
  font-weight: bold;
`;

export const Timing = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
export const TextTiming = styled.Text`
  color: #eff3f9;
  font-size: 10px;
  font-weight: bold;
  margin-left: 4px;
`;
