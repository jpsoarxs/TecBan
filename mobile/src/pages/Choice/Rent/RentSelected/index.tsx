import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressChart } from "react-native-chart-kit";

import HouseSelected from '../../../../assets/houseSelected.png';

import Button from '../../../../components/Button';

import Mapa from '../../../../assets/mapa.png';
import N4Imoveis from '../../../../assets/n4imoveis.png';

import {
  Container,
  HeaderContainer,
  Image,
  GradientContainer,
  InfoContainer,
  GrayContainer,
  InfoTitle,
  AddressContainer,
  AddressText,
  MapImage,
  CenterContainer,
  RecomendationContainer,
  RecomendationTextContainer,
  RecomendationTitle,
  RecomendationDescriptionText,
  RecomendationGraphContainer,
  RecomendationGraphPercentageText,
  RentDescriptionContainer,
  RentDescriptionTextContainer,
  RentDescriptionText,
  RentPositivesPointsText,
  RealEstateDescriptionContainer,
  RealEstateDescriptionTextContainer,
  RealEstateTitleContainer,
  RealEstateTitle,
  RealEstateDescriptionText,
  RealEstateImage,
  PaymentValuesContainer,
  PaymentValuesText,
  TotalPaymentValueText,
  TotalPaymentBolderText,
  GreenBar,
} from './styles';

const RentSelected: React.FC = () => {
  const navigation = useNavigation();

  const data = { data: [0.22] };
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(11, 240, 54, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <>
      <StatusBar hidden />
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

          <RecomendationContainer>
            <RecomendationTextContainer>
              <RecomendationTitle>Recomendado!</RecomendationTitle>
              <RecomendationDescriptionText>
                Tem um custo menor que 30% da sua renda mensal.
              </RecomendationDescriptionText>
            </RecomendationTextContainer>

            <RecomendationGraphContainer>
              <ProgressChart
                data={data}
                width={80}
                height={80}
                strokeWidth={14}
                radius={34}
                chartConfig={chartConfig}
                hideLegend
              />
              <RecomendationGraphPercentageText>-22%</RecomendationGraphPercentageText>
            </RecomendationGraphContainer>
          </RecomendationContainer>

          <RentDescriptionContainer>
            <RentDescriptionTextContainer>
              <Icon name="check-circle" size={22} color="#5AF036" />
              <RentPositivesPointsText>Próximo do trabalho</RentPositivesPointsText>
            </RentDescriptionTextContainer>
            <RentDescriptionTextContainer>
              <Icon name="check-circle" size={22} color="#5AF036" />
              <RentPositivesPointsText>Próximo do trabalho</RentPositivesPointsText>
            </RentDescriptionTextContainer>

            <RentDescriptionText>
              Casa ampla e bem ventilada, cozinha com armários embutidos e bem conservados,
              dois quartos com armários embutidos, um banheiro, 2 vagas de garagem, lavanderia
              espaçosa com boa iluminação. Fácil acesso ao metrô, mercado e farmácia.
            </RentDescriptionText>
          </RentDescriptionContainer>

          <RealEstateDescriptionContainer>
            <RealEstateDescriptionTextContainer>
              <RealEstateTitleContainer>
                <RealEstateTitle>N4Imóveis</RealEstateTitle>
                <Icon name="check-circle" size={22} color="#55ABFC" />
              </RealEstateTitleContainer>

              <RealEstateDescriptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis porttitor augue id consectetur consequat. Maecenas lacus
              </RealEstateDescriptionText>
            </RealEstateDescriptionTextContainer>

            <RealEstateImage source={N4Imoveis} />
          </RealEstateDescriptionContainer>

          <PaymentValuesContainer>
            <PaymentValuesText>IPTU: R$ 450/mês</PaymentValuesText>
            <PaymentValuesText>Condomínio: R$ 450/mês</PaymentValuesText>
          </PaymentValuesContainer>

          <TotalPaymentValueText>
            <TotalPaymentBolderText>R$1210</TotalPaymentBolderText>
            /mês
          </TotalPaymentValueText>

          <Button
            onPress={() => navigation.navigate('ScheduleVisit')}
            text="Agendar visita"
            color="#F0A036"
            iconSide="right"
            iconName="chevrons-right"
            style={{ marginBottom: 42 }}
          />
        </CenterContainer>
      </Container>
    </>
  );
}

export default RentSelected;
