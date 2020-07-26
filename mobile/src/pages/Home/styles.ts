import styled from 'styled-components/native';

interface MoneyValueProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F5F5F5;
`;

export const HeaderContainer = styled.View`
  max-height: 300px;
`;

export const HeaderGrayContainer = styled.View`
  padding: 42px 22px 12px 22px;
  height: 180px;
  background-color: #313946;
`;

export const HeaderMainColorContainer = styled.View`
  padding: 12px 54px;
  height: 80px;
  background-color: #F0A036;
`;

export const AvailableMoneyText = styled.Text`
  color: #313946;
  font-size: 16px;
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

export const CommitedMoneyContainer = styled.View`
  margin-top: auto;
  text-align: center;
  padding: 0 32px;
`;

export const MonthMoneyCommitedText = styled.Text`
  color: #FFF;
  font-size: 16px;
`;

export const MoneyValue = styled.Text<MoneyValueProps>`
  margin-top: 4px;
  color: ${props => props.color};
  font-size: 22px;
  font-weight: bold;
`;

export const PropertiesContainer = styled.View`
  padding: 0 22px;
  margin-top: 32px;
`;

export const PropertiesTitle = styled.Text`
  color: #313946;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;
