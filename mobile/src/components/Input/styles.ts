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
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-color: transparent;
  border-bottom-color: ${props => props.borderColor || '#FFF'};
  border-width: ${props => props.borderWidth || '3px'};
`;

export const TextInput = styled.TextInput<TextInputProps>`
  flex: 1;
  color: ${props => props.color || '#FFF'};
  margin-top: 10px;
  margin-left: -6px;
  font-size: 16px;
`;
