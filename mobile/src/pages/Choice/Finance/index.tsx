import React, { useCallback } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';

import ProfileImage from '../../../assets/profile.png';

import House1Img from '../../../assets/house1.png';
import House1_1Img from '../../../assets/house1-1.png';
import House2Img from '../../../assets/house2.png';
import House2_2Img from '../../../assets/house2-2.png';
import House3Img from '../../../assets/house3.png';
import House3_3Img from '../../../assets/house3-3.png';

import Button from '../../../components/Button';

import {
  Container,
  HeaderContainer,
  TopContainer,
  DescriptionText,
  ProfilePhoto,
  DescriptionContainer,
  ScrollHorizontalContainer,
  Title,
  ScrollVertical,
  ImageContainer,
  Image,
  FooterImageContainerGradient,
  FooterImageTitle,
  AddressContainer,
  AddressText,
  TitleContainer,
} from './styles';

const Finance: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <HeaderContainer>
          <TopContainer>
            <RectButton onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={28} color="#FFF" />
            </RectButton>

            <ProfilePhoto source={ProfileImage} />
          </TopContainer>


          <DescriptionContainer>
            <DescriptionText>
              As recomendações são baseadas no seu histórico bancário e informações do questionário,
              tudo para que possamos ajuda-lo(a) a fazer a escolha certa.
            </DescriptionText>


            <Button
              text="questionário"
              color="#F0A036"
              TextColor="#313946"
              iconSide="left"
              iconName="filter"
              iconColor="#313946"
              style={{ marginTop: 22 }}
          />
          </DescriptionContainer>

      </HeaderContainer>

      <ScrollVertical>
          <ScrollHorizontalContainer>
            <TitleContainer>
              <Title>Recomendado</Title>
              <Icon name="check-circle" size={24} color="#5AF036" />
            </TitleContainer>

              <ScrollView horizontal>
                <ImageContainer>
                  <RectButton onPress={() => navigation.navigate('FinanceSelected')}>
                    <Image source={House1Img} />
                  </RectButton>

                  <FooterImageContainerGradient colors={['transparent', '#222']}>
                    <FooterImageTitle>Casa 1</FooterImageTitle>
                    <AddressContainer>
                      <Icon name="map-pin" size={22} color="#fff" />
                      <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                    </AddressContainer>
                  </FooterImageContainerGradient>

                </ImageContainer>

                <ImageContainer>
                  <RectButton onPress={() => {}}>
                    <Image source={House1_1Img} />
                  </RectButton>

                  <FooterImageContainerGradient colors={['transparent', '#222']}>
                    <FooterImageTitle>Casa 1</FooterImageTitle>
                    <AddressContainer>
                      <Icon name="map-pin" size={22} color="#fff" />
                      <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                    </AddressContainer>
                  </FooterImageContainerGradient>

                </ImageContainer>
              </ScrollView>
          </ScrollHorizontalContainer>

          <ScrollHorizontalContainer>
            <TitleContainer>
              <Title>Recomendação Média</Title>
              <Icon name="check-circle" size={24} color="#E4F036" />
            </TitleContainer>

            <ScrollView horizontal>
              <ImageContainer>
                <RectButton onPress={() => {}}>
                  <Image source={House2Img} />
                </RectButton>

                <FooterImageContainerGradient colors={['transparent', '#222']}>
                  <FooterImageTitle>Casa 2</FooterImageTitle>
                  <AddressContainer>
                    <Icon name="map-pin" size={22} color="#fff" />
                    <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                  </AddressContainer>
                </FooterImageContainerGradient>

              </ImageContainer>

              <ImageContainer>
                <RectButton onPress={() => {}}>
                  <Image source={House2_2Img} />
                </RectButton>

                <FooterImageContainerGradient colors={['transparent', '#222']}>
                  <FooterImageTitle>Casa 1</FooterImageTitle>
                  <AddressContainer>
                    <Icon name="map-pin" size={22} color="#fff" />
                    <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                  </AddressContainer>
                </FooterImageContainerGradient>
              </ImageContainer>

            </ScrollView>
          </ScrollHorizontalContainer>

          <ScrollHorizontalContainer>
            <TitleContainer>
              <Title>Recomendação Baixa</Title>
              <Icon name="check-circle" size={24} color="#F05636" />
            </TitleContainer>

            <ScrollView horizontal>
              <ImageContainer>
                <RectButton onPress={() => {}}>
                  <Image source={House3Img} />
                </RectButton>

                <FooterImageContainerGradient colors={['transparent', '#222']}>
                  <FooterImageTitle>Casa 3</FooterImageTitle>
                  <AddressContainer>
                    <Icon name="map-pin" size={22} color="#fff" />
                    <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                  </AddressContainer>
                </FooterImageContainerGradient>

              </ImageContainer>

              <ImageContainer>
                <RectButton onPress={() => {}}>
                  <Image source={House3_3Img} />
                </RectButton>

                <FooterImageContainerGradient colors={['transparent', '#222']}>
                  <FooterImageTitle>Casa 1</FooterImageTitle>
                  <AddressContainer>
                    <Icon name="map-pin" size={22} color="#fff" />
                    <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                  </AddressContainer>
                </FooterImageContainerGradient>

              </ImageContainer>
            </ScrollView>
          </ScrollHorizontalContainer>
      </ScrollVertical>
    </Container>
  )
}

export default Finance;
