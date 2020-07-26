import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Button from '../../components/Button';

import LogoImg from '../../assets/logo.png';

import { Container, FooterContainer, SignUpText, SignUpTextBold, Logo } from './styles';

const Sign: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar hidden={false} barStyle="light-content" backgroundColor="#313946" />
      <Logo source={LogoImg} />

      <FooterContainer>
        <Button
          onPress={() => navigation.navigate("Home")}
          text="entrar"
          color="#F0A036"
          style={{ marginTop: 'auto' }}
        />
        <SignUpText>Não tem conta? <SignUpTextBold>Registre-se</SignUpTextBold></SignUpText>
      </FooterContainer>
    </Container>
  );
}

export default Sign;
