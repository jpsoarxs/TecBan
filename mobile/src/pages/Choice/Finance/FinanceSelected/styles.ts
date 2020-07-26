import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #FBFBFB;
`;

export const HeaderContainer = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  width: 120%;
  height: 380px;
`;

export const GradientContainer = styled(LinearGradient)`
  width: 100%;
  height: 80px;
  padding: 30px 30px 0;
  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  top: 0;
`;

export const CenterContainer = styled.View`
  flex: 1;
  margin: 0 33px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: 22px;

  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 13;

  bottom: 22px;
`;

export const GreenBar = styled.View`
  width: 55px;
  height: 3px;
  border-radius: 10px;
  background: #5AF036;

  position: absolute;
  top: -30px;
  right: 22px;
`;

export const GrayContainer = styled.View`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 80px;
  background-color: #313946;
  padding: 12px 22px;
`;

export const InfoTitle = styled.Text`
  color: #F5F5F5;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressText = styled.Text`
  margin-left: 8px;
  color: #F5F5F5;
`;

export const MapImage = styled.Image`
  height: 80px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const RecomendationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RecomendationTextContainer = styled.View`
  max-width: 200px;
`;

export const RecomendationTitle = styled.Text`
  color: #5AF036;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const RecomendationDescriptionText = styled.Text`
  color: #717171;
  font-size: 16px;
  line-height: 22px;
`;

export const RecomendationGraphContainer = styled.View`
  padding: 12px;
  position: relative;
`;

export const RecomendationGraphPercentageText = styled.Text`
  color: #5Af036;
  font-size: 16px;
  font-weight: bold;

  position: absolute;
  top: 40px;
  left: 35px;
`;

export const RentDescriptionContainer = styled.View`
  padding-bottom: 12px;
  border: 1px solid transparent;
  border-bottom-color: #707070;
`;

export const RentDescriptionTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const RentPositivesPointsText = styled.Text`
  margin-left: 8px;
`;

export const RentDescriptionText = styled.Text`
  color: #717171;
  font-size: 12px;
  line-height: 18px;
`;

export const RealEstateDescriptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
  width: 100%;
`;

export const RealEstateDescriptionTextContainer = styled.View``;

export const RealEstateTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RealEstateTitle = styled.Text`
  color: #313946;
  font-size: 16px;
  font-weight: bold;
  margin-right: 8px;
`;

export const RealEstateDescriptionText = styled.Text`
  color: #717171;
  font-size: 14px;
  line-height: 16px;
  max-width: 200px;
  margin-top: 12px;
`;

export const RealEstateImage = styled.Image`
  align-self: flex-end;
  width: 120px;
`;

export const PaymentValuesContainer = styled.View`
  padding: 12px 0;
  margin: 22px 0;
  border: 1px solid transparent;
  border-bottom-color: #707070;
  border-top-color: #707070;
`;

export const PaymentValuesText = styled.Text`
  color: #717171;
  font-size: 16px;
  text-align: right;
`;

export const TotalPaymentValueText = styled.Text`
  color: #717171;
  font-size: 20px;
  margin-right: 8px;
`;

export const TotalPaymentBolderText = styled.Text`
  color: #313946;
  font-size: 22px;
  font-weight: bold;
`;

export const TotalPaymentValueContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

export const FinanceWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FinanceTextWrapper = styled.View``;

export const FinanceStatusImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FinanceStatusImage = styled.Image``;

export const FinanceStatusText = styled.Text`
  color: #717171;
  font-size: 14px;
  margin-top: 4px;
`;

export const FinanceText = styled.Text`
  color: #313946;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 22px;
`;

export const FinanceGroupImages = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FinanceGroupImage = styled.Image``;
