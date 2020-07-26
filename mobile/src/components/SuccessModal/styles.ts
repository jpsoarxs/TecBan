import styled from 'styled-components/native';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${props => props.isOpen ? 999 : -1};

  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,0.3);
`;

export const ModalContainer = styled.View`
  width: 300px;
  background-color: #fff;
  padding: 42px 22px;

  align-items: center;
`;

export const ModalText = styled.Text`
  color: #313946;
  font-size: 20px;
  font-weight: bold;
  max-width: 150px;
  text-align: center;
  margin: 22px 0 32px;
`;
