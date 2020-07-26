import styled from 'styled-components/native';

interface CircleButtonProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  height: 100%;
`;

export const ImagesContainer = styled.View`
  flex: 1;
  height: 60%;
  max-height: 60%;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
`;

export const FooterContainer = styled.View`
  height: 40%;
  padding: 22px;
  background-color: #F5F5F5;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  margin-top: 60px;
  max-width: 280px;
  line-height: 24px;
  text-align: center;
  font-size: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  top: 12px;
`;

export const CircleButton1 = styled.TouchableOpacity<CircleButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 11px;
  margin: 0 8px;
  background-color: ${props => props.active ? '#F0A036' : '#313946'};
`;

export const CircleButton2 = styled.TouchableOpacity<CircleButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 11px;
  margin: 0 8px;
  background-color: ${props => props.active ? '#F0A036' : '#313946'};
`;

export const CircleButton3 = styled.TouchableOpacity<CircleButtonProps>`
  width: 12px;
  height: 12px;
  border-radius: 11px;
  margin: 0 8px;
  background-color: ${props => props.active ? '#F0A036' : '#313946'};
`;
