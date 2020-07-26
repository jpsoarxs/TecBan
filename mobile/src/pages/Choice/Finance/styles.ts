import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #F5F5F5;
`;

export const HeaderContainer = styled.View`
  padding: 42px 22px 12px 22px;
  height: 280px;
  background-color: #313946;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionContainer = styled.View`
  padding: 0 22px;
`;

export const DescriptionText = styled.Text`
  margin-top: 32px;
  color: #FFF;
  font-size: 12px;
  line-height: 15px;
`;

export const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const ScrollVertical = styled.ScrollView`
  flex: 1;
  padding-left: 44px;
  margin-top: 32px;
`;

export const ScrollHorizontalContainer = styled.View`
  margin-bottom: 33px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #313946;
  font-size: 18px;
  font-weight: bold;
  margin-right: 14px;
`;

export const ImageContainer = styled.View`
  width: 300px;
  max-width: 300px;
  margin-top: 22px;
  margin-right: 12px;

  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  border-radius: 20px;
`;

export const FooterImageContainerGradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
`;

export const FooterImageTitle = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  margin: 0 22px;
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 22px;
`;

export const AddressText = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin: 8px 0 8px 10px;
`;
