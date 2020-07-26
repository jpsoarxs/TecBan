import styled from 'styled-components/native';

interface ContainerInputProps {
  borderColor?: string;
  borderWidth?: string;
}

interface TextInputProps {
  color?: string;
}

export const Container = styled.View<ContainerInputProps>`
  width: 100%;
  height: 60px;
  padding: 0 12px;
  margin-bottom: 12px;
  background-color: #EEEEEE;
`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  color: ${props => props.color || '#222'};
  margin-top: 10px;
  font-size: 16px;
`;

export const LabelText = styled.Text`
  color: #717171;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;
