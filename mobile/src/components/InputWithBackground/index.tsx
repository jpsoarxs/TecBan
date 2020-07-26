import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, LabelText } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
}

const InputWithBackground: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <>
      {label && (
        <LabelText>{label}</LabelText>
      )}
      <Container>
        <TextInput
          {...rest} placeholderTextColor="#C9C9C9"
        />
      </Container>
    </>
  )
}

export default InputWithBackground;
