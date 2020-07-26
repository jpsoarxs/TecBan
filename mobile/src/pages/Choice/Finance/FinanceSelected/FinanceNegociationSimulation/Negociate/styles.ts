import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface DatePlaceHolderProps {
  isActive: boolean;
}

interface HourPlaceHolderProps {
  isActive: boolean;
}

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

export const InputContainer = styled.View`
  flex: 1;
  padding: 0 22px;
`;

export const InputLabelText = styled.Text`
  color: #707070;
  font-size: 12px;
  margin-bottom: -12px;
  margin-top: 12px;
  max-width: 190px;
`;

export const ScheduleVisitTitle = styled.Text`
  color: #313946;
  font-size: 20px;
  font-weight: bold;
  margin: 22px 0;
  text-align: center;
`;

export const PlaceholderInputDate = styled.Text<DatePlaceHolderProps>`
  color: ${props => props.isActive ? '#C5C5C5' : '#F5F5F5'};
  position: absolute;
  top: 28px;
`;

export const PlaceholderInputHour = styled.Text<HourPlaceHolderProps>`
  color: ${props => props.isActive ? '#C5C5C5' : '#F5F5F5'};
  position: absolute;
  top: 28px;
`;

export const FormattedHourText = styled.Text`
  color: #222;
  position: absolute;
  top: 28px;
`;

export const FormattedDateText = styled.Text`
  color: #222;
  position: absolute;
  top: 28px;
`;

export const RecomendationContainer = styled.View`
  padding: 0 22px;
  margin-bottom: 80px;
`;

export const RecomendationText = styled.Text`
  color: #707070;
  font-size: 12px;
  text-align: center;
  border-color: transparent;
  border-bottom-color: #707070;
  border-width: 1px;
  padding-bottom: 8px;
  margin-bottom: 12px;
`;

export const EntryValueContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const EntryValueText = styled.Text`
  color: #707070;
  margin-right: 8px;
`;

export const EntryValueTextBold = styled.Text`
  color: #707070;
  font-weight: bold;
`;

export const PlotsValueContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlotsValueText = styled.Text`
  color: #707070;
  margin-right: 8px;
`;

export const PlotsValueTextBold = styled.Text`
  color: #707070;
  font-weight: bold;
`;

export const CustomButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #F0A036;
  margin: 12px 22px;
  padding: 8px 12px;
  border-radius: 22px;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
`;

export const InputEntryValueAndPlots = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 22px;
`;

export const InputEntry = styled.View`
  position: relative;
  width: 100%;
  max-width: 180px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-color: transparent;
  border-bottom-color: #707070;
  border-width: 2px;
`;

export const PlaceholderInputEntry = styled.Text`
  color: #C5C5C5;
  position: absolute;
  top: 28px;
`;

export const InputPlots = styled.View`
  position: relative;
  width: 80px;
  max-width: 150px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-color: transparent;
  border-bottom-color: #707070;
  border-width: 2px;
`;

export const PlaceholderInputPlots = styled.Text`
  color: #C5C5C5;
  position: absolute;
  top: 28px;
`;

export const InputPlotsIcon = styled(Icon)`
  position: absolute;
  right: 0;
  top: 28px;
`;

export const InputCustomWrapper = styled.View``;
