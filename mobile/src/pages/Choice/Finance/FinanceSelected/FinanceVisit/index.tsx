import React, { useState, useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import HouseSelected from '../../../../../assets/houseSelected.png';

import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';

import Mapa from '../../../../../assets/mapa.png';

import SuccessModal from '../../../../../components/SuccessModal';

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
  InputContainer,
  InputLabelText,
  ScheduleVisitTitle,
  InputDateContainer,
  InputDateWrapper,
  InputDate,
  InputHour,
  InputDateIcon,
  PlaceholderInputDate,
  PlaceholderInputHour,
  FormattedHourText,
  FormattedDateText
} from './styles';

const FinanceVisit: React.FC = () => {
  const navigation = useNavigation();
  const [showDatePicket, setShowDatePicker] = useState(false);
  const [showHourPicket, setShowHourPicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());

  const [showFormattedDate, setShowFormattedDate] = useState<string | null>(null);
  const [showFormattedHour, setShowFormattedHour] = useState<string | null>(null);

  const phoneInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleToggleHourPicker = useCallback(() => {
    setShowHourPicker(state => !state);
  }, []);

  const handleDateChanged = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date) {
      setSelectedDate(date)
      const formattedDate = format(date, 'dd/MM/yyyy', { locale: pt });
      setShowFormattedDate(formattedDate);
      setShowHourPicker(true);
    }
  }, []);

  const handleHourChanged = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowHourPicker(false);
    }

    if (date) {
      setSelectedHour(date)
      const formattedHour = format(date, 'HH:mm', { locale: pt });
      setShowFormattedHour(formattedHour);
    }
  }, []);

  const handleConfirmModalButton = useCallback(() => {
    setModalIsOpen(false);

    navigation.navigate('Home');
  }, []);

  const handleConfirmSchedule = useCallback((data) => {
    console.log('FORM DATA: ', data)

    setModalIsOpen(true);
  }, []);

  return (
    <>
      <SuccessModal
        text="Agendamento Confirmado"
        isOpen={modalIsOpen}
        onConfirm={handleConfirmModalButton} />
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

              <ScheduleVisitTitle>Agendamento</ScheduleVisitTitle>

              <Form onSubmit={handleConfirmSchedule} ref={formRef}>
                <InputContainer>
                  <InputLabelText>Como prefere ser Chamado (a)</InputLabelText>
                  <Input
                    name="name"
                    placeholder="Preferência"
                    placeholderTextColor="#C5C5C5"
                    color="#222"
                    borderColor="#707070"
                    borderWidth="2px"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => phoneInputRef.current?.focus()}
                  />
                </InputContainer>

                <InputContainer>
                  <InputLabelText>Contato*</InputLabelText>
                  <Input
                    ref={phoneInputRef}
                    name="phone"
                    placeholder="Telefone/WhatsApp"
                    placeholderTextColor="#C5C5C5"
                    color="#222"
                    borderColor="#707070"
                    borderWidth="2px"
                    keyboardType="numeric"
                    returnKeyType="next"
                    onSubmitEditing={handleToggleDatePicker}
                  />
                </InputContainer>
              </Form>

              <InputDateContainer>

                <InputLabelText>Data / Hora da Visita*</InputLabelText>

                <InputDateWrapper>
                  <TouchableWithoutFeedback onPress={handleToggleDatePicker}>
                    <InputDate>
                      <PlaceholderInputDate isActive={!showFormattedDate}>23/01/2020</PlaceholderInputDate>

                      {showFormattedDate && (
                        <FormattedDateText>{showFormattedDate}</FormattedDateText>
                      )}

                      {showDatePicket && (
                        <DateTimePicker
                          mode="date"
                          display="calendar"
                          textColor="#F5F5F5"
                          value={selectedDate}
                          onChange={handleDateChanged}
                        />
                      )}

                      <InputDateIcon name="calendar" size={22} />
                    </InputDate>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={handleToggleHourPicker}>
                    <InputHour>
                      <PlaceholderInputHour isActive={!showFormattedHour}>Horário</PlaceholderInputHour>

                      {showFormattedHour && (
                        <FormattedHourText>{showFormattedHour}</FormattedHourText>
                      )}

                      {showHourPicket && (
                        <DateTimePicker
                          mode="time"
                          is24Hour
                          display="clock"
                          textColor="#F5F5F5"
                          value={selectedHour}
                          onChange={handleHourChanged}
                        />
                      )}

                      <InputDateIcon name="chevron-down" size={22} />
                    </InputHour>
                  </TouchableWithoutFeedback>
                </InputDateWrapper>

              </InputDateContainer>

              <Button
                onPress={() => formRef.current?.submitForm()}
                text="Confirmar agendamento"
                color="#F0A036"
                iconSide="right"
                iconName="chevrons-right"
                style={{
                  marginBottom: 42,
                  marginTop: 42,
                  justifyContent: 'space-between',
                  paddingHorizontal: 32
                }}
              />
            </CenterContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default FinanceVisit;
