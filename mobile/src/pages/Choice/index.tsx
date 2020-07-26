import React, { useState, useCallback } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import ProfileImage from '../../assets/profile.png';

import RentImg from '../../assets/rent.png';
import FinanceImg from '../../assets/finance.png';

import Button from '../../components/Button';

import {
  Container,
  HeaderContainer,
  ProfilePhoto,
  TopContainer,
  ChoiceTitle,
  RentContainer,
  FooterContainer,
  FooterButton,
  FooterButtonText,
  RentImage,
  FinanceContainer,
  FinanceImage
} from './styles';

const Home: React.FC = () => {
  const [selected, setSelected] = useState(1);
  const navigation = useNavigation();

  const handleChoiceNavigate = useCallback(() => {
    if (selected === 1) {
      navigation.navigate('Rent');
    }

    if (selected === 2) {
      navigation.navigate('Finance');
    }
  }, [selected]);

  return (
    <Container>
      <HeaderContainer>
          <TopContainer>
            <RectButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="#FFF" />
            </RectButton>

            <ProfilePhoto source={ProfileImage} />
          </TopContainer>

          <ChoiceTitle>Qual dos tipos gostaria de escolher?</ChoiceTitle>
      </HeaderContainer>

        <RentContainer>
          <RentImage source={RentImg} />

          <FooterContainer>
            <FooterButton onPress={() => navigation.navigate('Rent')}>
              <FooterButtonText>Aluguel</FooterButtonText>
            </FooterButton>

            <RectButton onPress={() => setSelected(1)}>
              <Icon
                name={selected === 1 ? 'check-circle' : 'circle'}
                size={22}
                color="#F5F5F5"
              />
            </RectButton>
          </FooterContainer>
        </RentContainer>

        <FinanceContainer>
          <FinanceImage source={FinanceImg} />

          <FooterContainer>
          <FooterButton onPress={() => navigation.navigate('Finance')}>
              <FooterButtonText>Financiamento</FooterButtonText>
            </FooterButton>

            <RectButton onPress={() => setSelected(2)}>
              <Icon
                name={selected === 2 ? 'check-circle' : 'circle'}
                size={22}
                color="#F5F5F5"
              />
            </RectButton>
          </FooterContainer>

        <Button
          onPress={handleChoiceNavigate}
          text="prosseguir"
          color="#F0A036"
          iconSide="right"
          iconName="arrow-right"
          style={{ marginTop: 62, marginBottom: 22 }}
        />
        </FinanceContainer>

    </Container>
  );
};

export default Home;
