import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HouseSelected from '../../../../../../assets/houseSelected.png';

import Button from '../../../../../../components/Button';

import Mapa from '../../../../../../assets/mapa.png';

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
  RecomendationContainer,
  RecomendationText,
  EntryValueContainer,
  EntryValueText,
  EntryValueTextBold,
  PlotsValueContainer,
  PlotsValueText,
  PlotsValueTextBold,
  CustomButton,
  CustomButtonText,
  InputEntryValueAndPlots,
  InputEntry,
  InputLabelText,
  PlaceholderInputEntry,
  InputPlots,
  PlaceholderInputPlots,
  InputPlotsIcon,
  InputCustomWrapper
} from './styles';

const Negociate: React.FC = () => {
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

            <ScheduleVisitTitle>Precisamos de alguns dados para facilitar o processo de financiamento.</ScheduleVisitTitle>

            <RecomendationContainer>
              <RecomendationText>
                Recomendação para uma maior taxa de aprovação baseado nas sua movimentações bancárias.
              </RecomendationText>

              <EntryValueContainer>
                <EntryValueText>Entrada:</EntryValueText>
                <EntryValueTextBold>R$ 32.250.00</EntryValueTextBold>
              </EntryValueContainer>

              <PlotsValueContainer>
                <PlotsValueText>Parcelas:</PlotsValueText>
                <PlotsValueTextBold>48</PlotsValueTextBold>
              </PlotsValueContainer>

              <CustomButton>
                <CustomButtonText>Preencher automáticamente</CustomButtonText>
              </CustomButton>
            </RecomendationContainer>

            <InputEntryValueAndPlots>
                <InputCustomWrapper>
                  <InputLabelText>Quanto gostaria de dar de entrada?</InputLabelText>
                  <InputEntry>
                    <PlaceholderInputEntry>R$ 00</PlaceholderInputEntry>
                  </InputEntry>
                </InputCustomWrapper>

                <InputCustomWrapper>
                  <InputLabelText>Parcelas?</InputLabelText>
                  <InputPlots>
                    <PlaceholderInputPlots>R$ 24</PlaceholderInputPlots>
                    <InputPlotsIcon name="chevron-down" size={22} />
                  </InputPlots>
                </InputCustomWrapper>
            </InputEntryValueAndPlots>

            <Button
              onPress={() => navigation.navigate("BankList")}
              text="Ver propostas"
              color="#F0A036"
              iconSide="right"
              iconName="chevrons-right"
              style={{
                marginBottom: 22,
                marginTop: 42,
                justifyContent: 'space-between',
                paddingHorizontal: 32
              }}
            />
          </CenterContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Negociate;
