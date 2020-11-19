/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import codePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';
import AppProvider from './hooks';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0C1EBB" barStyle="light-content" />
      <View style={{backgroundColor: '##f7f9fc', flex: 1}}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </View>
    </NavigationContainer>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
// export default App;
