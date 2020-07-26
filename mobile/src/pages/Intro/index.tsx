import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';

import {
  Container,
  ImagesContainer,
  FooterContainer,
  Text,
  ButtonsContainer,
  CircleButton1,
  CircleButton2,
  CircleButton3
} from './styles';

const Intro: React.FC = () => {
  let [circleButtonActive, setCircleButtonActive] = useState(1);
  const [customImage, setCustomImage] = useState(Image1);
  const navigation = useNavigation();

  const handleChangeActiveCircleButton = useCallback(() => {
    if (circleButtonActive === 3) {
      navigation.navigate('Sign');
    }

    setCircleButtonActive(circleButtonActive += 1);
  }, []);

  const customText = useMemo(() => {
    let text;

    switch(circleButtonActive) {
      case 1: {
        text = 'Encontre o imóvel e veículo ideal, compatível com sua renda, com seu momento.';
        break;
      }
      case 2: {
        text = 'Menores taxas, menos burocracia e mais rapidez.';
        break;
      }
      case 3: {
        text = 'Facilidade e economia, inovando as relações imobiliárias.';
        break;
      }
    }

    return text;
  }, [circleButtonActive]);

  useEffect(() => {
    switch (circleButtonActive) {
      case 1: {
        setCustomImage(Image1);
        break;
      }
      case 2: {
        setCustomImage(Image2);
        break;
      }
      case 3: {
        setCustomImage(Image3);
        break;
      }
    }
  }, [circleButtonActive]);

  return (
    <>
      <StatusBar hidden />
      <Container>
        <ImagesContainer>
          <Image source={customImage} />
        </ImagesContainer>

        <FooterContainer>
          <ButtonsContainer>
            <CircleButton1
              onPress={() => setCircleButtonActive(1)}
              active={circleButtonActive === 1}
            />
            <CircleButton2
              onPress={() => setCircleButtonActive(2)}
              active={circleButtonActive === 2}
            />
            <CircleButton3
              onPress={() => setCircleButtonActive(3)}
              active={circleButtonActive === 3}
            />
          </ButtonsContainer>

          <Text>{customText}</Text>
          <Button
            onPress={handleChangeActiveCircleButton}
            text="Prosseguir"
            color="#313946"
            iconSide="right"
            iconName="arrow-right"
            style={{ marginTop: 'auto' }}
          />

        </FooterContainer>
      </Container>
    </>
  )
}

export default Intro;
