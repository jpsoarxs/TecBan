import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #F5F5F5;
`;

export const HeaderContainer = styled.View`
  padding: 42px 22px 12px 22px;
  height: 200px;
  background-color: #313946;
`;

export const ChoiceTitle = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  margin-top: 32px;
  padding: 0 22px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const RentContainer = styled.View`
  margin-top: 32px;
  align-items: center;
  padding: 0 22px;
`;

export const RentImage = styled.Image`
  width: 100%;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const FinanceContainer = styled.View`
  margin: 32px 0;
  align-items: center;
  padding: 0 22px;
`;

export const FinanceImage = styled.Image`
  width: 100%;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const FooterContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  background-color: #313946;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const FooterButton = styled(RectButton)`
  flex: 1;
  padding: 10px;

  position: relative;
  right: 22px;
  border-bottom-left-radius: 10px;
`;

export const FooterButtonText = styled.Text`
  color: #F5F5F5;
  font-size: 14px;
`;
