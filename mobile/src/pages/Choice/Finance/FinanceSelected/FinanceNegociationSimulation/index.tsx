import React, { useState, useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';

import HouseSelected from '../../../../../assets/houseSelected.png';

import Button from '../../../../../components/Button';

import Mapa from '../../../../../assets/mapa.png';

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
} from './styles';

const FinanceNegociationSimulation: React.FC = () => {
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

            <ScheduleVisitTitle>Gostaria de Negociar o Apartamento?</ScheduleVisitTitle>

            <Button
              onPress={() => navigation.navigate("Negociate")}
              text="Sim"
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

            <Button
              onPress={() => navigation.goBack()}
              text="Não"
              color="#227FCF"
              iconSide="right"
              iconName="chevrons-right"
              style={{
                marginBottom: 42,
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

export default FinanceNegociationSimulation;
