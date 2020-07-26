import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import ProfileImage from '../../assets/profile.png';

import InputWithBackground from '../../components/InputWithBackground';
import Button from '../../components/Button';

import {
  Container,
  HeaderContainer,
  ProfilePhoto,
  TopContainer,
  MonthMoneyCommitedText,
  MoneyValue,
  CommitedMoneyContainer,
  HeaderGrayContainer,
  HeaderMainColorContainer,
  AvailableMoneyText,
  PropertiesContainer,
  PropertiesTitle,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      console.log("URL LINK: ", url)
    })
  }, [Linking]);

  return (
    <Container>
      <HeaderContainer>
        <HeaderGrayContainer>
          <TopContainer>
            <Icon name="align-left" size={28} color="#FFF" />
            <ProfilePhoto source={ProfileImage} />
          </TopContainer>

          <CommitedMoneyContainer>
            <MonthMoneyCommitedText>Dinheiro Comprometido mensalmente:</MonthMoneyCommitedText>
            <MoneyValue color="#FFF">R$ 00,00</MoneyValue>
          </CommitedMoneyContainer>
        </HeaderGrayContainer>

        <HeaderMainColorContainer>
          <AvailableMoneyText>Dinheiro Médio Disponível:</AvailableMoneyText>
          <MoneyValue color="#313946">R$ 00,00</MoneyValue>
        </HeaderMainColorContainer>
      </HeaderContainer>

      <PropertiesContainer>
        <PropertiesTitle>Imóveis</PropertiesTitle>

        <InputWithBackground
          name="rented"
          label="Alugados"
          placeholder="Nenhum imóvel vinculado ao seu CPF"
        />

        <InputWithBackground
          name="financed"
          label="Financiados"
          placeholder="Nenhum imóvel vinculado ao seu CPF"
        />

        <Button
          onPress={() => navigation.navigate("Choice")}
          text="ver opções"
          color="#F0A036"
          iconSide="right"
          iconName="arrow-right"
          style={{ marginTop: 12 }}
        />
      </PropertiesContainer>
    </Container>
  );
};

export default Home;
