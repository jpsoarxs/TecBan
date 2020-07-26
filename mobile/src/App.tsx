import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { View, StatusBar, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

import Routes from './routes';

const App: React.FC = () => {

  useEffect(() => {
    const regex = new RegExp('[?&]code=([^&]+)')
    Linking.addEventListener('url', (result) => {
      const data = {code: result['url'].match(regex)[1]}
      axios.post('http://localhost:3000/consent', data)
      .then((response) => {
        console.log("SUCESSO:", response);
      }, (error) => {
        console.log("ERRO:", error);
      });
    });
  });

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
