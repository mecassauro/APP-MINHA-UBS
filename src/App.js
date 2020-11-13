/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import codePush from 'react-native-code-push';
// import SplashScreen from 'react-native-splash-screen';

import Routes from './routes';
import AppProvider from './hooks';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0669b7" barStyle="light-content" />
      <AppProvider>
        <View style={{backgroundColor: '#0669b7', flex: 1}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

// export default codePush({
//   checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
// })(App);
export default App;
