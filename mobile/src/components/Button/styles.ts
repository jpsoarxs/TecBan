import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ButtonProps {
  color?: string;
};

interface ButtonTextProps {
  textColor?: string;
};

interface IconProps {
  side: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.color || '#F0A036'};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.textColor || '#FFF'};
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  ${props => props.side === 'left' ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`;
