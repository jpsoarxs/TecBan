import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HouseSelected from '../../../../../../../assets/houseSelected.png';

import Button from '../../../../../../../components/Button';

import Mapa from '../../../../../../../assets/mapa.png';
import BancoBrasil from '../../../../../../../assets/bancobrasil.png';
import Itau from '../../../../../../../assets/itau.png';

import {
  Container,
  HeaderContainer,
  GradientContainer,
  Image,
  CenterContainer,
  InfoContainer,
  GrayContainer,
  InfoTitle,
  AddressContainer,
  GreenBar,
  AddressText,
  MapImage,
  ScheduleVisitTitle,
  ScheduleVisitSmallTitle,
  BankContainer,
  BankHeader,
  BankImage,
  BankDescriptionContainer,
  BankTitle,
  BankText,
  BankTextWrapper,
  BankTextBold,
  BanDescriptionTextContainer,
  BankBorderLeft
} from './styles';

const BankList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <HeaderContainer>
            <Image source={HouseSelected} />

            <GradientContainer colors={['#222', 'transparent']}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={28} color="#F5F5F5" />
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <Icon name="heart" size={28} color="#F5F5F5" />
              </TouchableWithoutFeedback>
            </GradientContainer>
          </HeaderContainer>

          <CenterContainer>

            <InfoContainer>
              <GrayContainer>
                <InfoTitle>Casa 1</InfoTitle>
                <AddressContainer>
                  <GreenBar />
                  <Icon name="map-pin" size={22} color="#fff" />
                  <AddressText>Rua das flores, 56, Jd. Américo</AddressText>
                </AddressContainer>
              </GrayContainer>

              <MapImage source={Mapa} />
            </InfoContainer>

            <ScheduleVisitTitle>Lista de Banco e Financiadoras com diponibilidade para financiar o valor deste imóvel</ScheduleVisitTitle>

            <ScheduleVisitSmallTitle>
              Baseado na sua movimentação bancária e histórico foi gerado essa
              lista para uma escolha mais consciente do que é melhor para você.
            </ScheduleVisitSmallTitle>

            <BankContainer>
              <BankBorderLeft color="#5AF036"/>
              <BankHeader color="#DDF5D8">
                <BankDescriptionContainer>
                  <BankImage source={BancoBrasil} />

                  <BanDescriptionTextContainer>
                    <BankTitle>Banco do Brasil</BankTitle>
                    <BankText>7,45% a.a. + TR</BankText>
                    <BankTextWrapper>
                      <BankText>1ª Prestação:</BankText>
                      <BankTextBold>R$ 2400/mês</BankTextBold>
                    </BankTextWrapper>
                    <BankTextWrapper>
                      <BankText>Última Prestação</BankText>
                      <BankTextBold>R$ 840/mês</BankTextBold>
                    </BankTextWrapper>
                  </BanDescriptionTextContainer>
                </BankDescriptionContainer>
                <TouchableWithoutFeedback>
                  <Icon name="chevron-down" color="#313946" size={22}/>
                </TouchableWithoutFeedback>
              </BankHeader>
            </BankContainer>

            <BankContainer>
              <BankBorderLeft color="#5AF036"/>
              <BankHeader color="#DDF5D8">
                <BankDescriptionContainer>
                  <BankImage source={BancoBrasil} />

                  <BanDescriptionTextContainer>
                    <BankTitle>Banco do Brasil</BankTitle>
                    <BankText>7,45% a.a. + TR</BankText>
                    <BankTextWrapper>
                      <BankText>1ª Prestação:</BankText>
                      <BankTextBold>R$ 2400/mês</BankTextBold>
                    </BankTextWrapper>
                    <BankTextWrapper>
                      <BankText>Última Prestação</BankText>
                      <BankTextBold>R$ 840/mês</BankTextBold>
                    </BankTextWrapper>
                  </BanDescriptionTextContainer>
                </BankDescriptionContainer>
                <TouchableWithoutFeedback>
                  <Icon name="chevron-down" color="#313946" size={22} />
                </TouchableWithoutFeedback>
              </BankHeader>
            </BankContainer>

          </CenterContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default BankList;
