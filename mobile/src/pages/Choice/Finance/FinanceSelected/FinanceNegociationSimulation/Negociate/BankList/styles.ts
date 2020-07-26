import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../../../../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #FBFBFB;
`;

export const HeaderContainer = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  width: 120%;
  height: 180px;
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

export const GreenBar = styled.View`
  width: 55px;
  height: 3px;
  border-radius: 10px;
  background: #5AF036;

  position: absolute;
  top: -30px;
  right: 22px;
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

export const ScheduleVisitTitle = styled.Text`
  color: #313946;
  font-size: 18px;
  font-weight: bold;
  margin: 22px 22px;
  text-align: center;
`;

export const ScheduleVisitSmallTitle = styled.Text`
  color: #707070;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin: 0 22px 22px 22px;
`;

export const BankContainer = styled.View`
  margin: 22px 22px 0 22px;
  flex-direction: row;
`;

export const BankBorderLeft = styled.View`
  width: 9px;
  height: 100%;
  background-color: ${props => props.color};
`;

export const BankHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.color};
  padding-right: 12px;
  width: 100%;
`;

export const BankImage = styled.Image``;

export const BankDescriptionContainer = styled.View`
  flex-direction: row;
`;

export const BanDescriptionTextContainer = styled.View`
  margin-left: 4px;
`;

export const BankTitle = styled.Text`
  font-weight: bold;
  color: #313946;
  font-size: 14px;
  margin-top: 4px;
  margin-left: 4px;
`;

export const BankText = styled.Text`
  font-size: 12px;
  color: #707070;
  margin-left: 4px;
  margin-top: 2px;
`;

export const BankTextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BankTextBold = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #707070;
`;
