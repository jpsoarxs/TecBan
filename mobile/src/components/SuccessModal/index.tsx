import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, ModalText, ModalContainer } from './styles';

import Button from '../Button';

interface ModalProps {
  isOpen?: boolean;
  text: string;
  onConfirm: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ onConfirm, isOpen, text, ...rest }) => {
  return (
    <Container isOpen={isOpen} {...rest}>

      <ModalContainer>
        <Icon name="checkmark-circle" size={100} color="#5AF036" />
        <ModalText>{text}</ModalText>
        <Button
          onPress={onConfirm}
          text="Ok"
          color="#F0A036"
          />
      </ModalContainer>

    </Container>
  )
}

export default SuccessModal;
