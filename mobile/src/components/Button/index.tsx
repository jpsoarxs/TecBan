import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
  text: string;
  iconName?: string;
  color?: string;
  TextColor?: string;
  iconSide?: string;
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  iconSide, text, iconColor, iconName, color, TextColor, ...rest }) => {
  return (
    <Container color={color} {...rest}>
      {iconSide === 'left' && (
        <Icon side={iconSide} name={iconName} size={25} color={iconColor || "#FFF"} />
      )}
      <ButtonText textColor={TextColor}>{text}</ButtonText>
      {iconSide === 'right' && (
        <Icon side={iconSide} name={iconName} size={25} color={iconColor || "#FFF"} />
      )}
    </Container>
  )
}

export default Button;
