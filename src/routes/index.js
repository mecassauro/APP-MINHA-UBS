import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import HealthForm from '../pages/HealthForm';
import PersonalForm from '../pages/PersonalForm';
import AddressForm from '../pages/AddressForm';

const App = createStackNavigator();

function Routes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#0669b7'},
      }}
      initialRouteName="SignIn">
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="SignUp" component={SignUp} />
      <App.Screen name="Home" component={Home} />
      <App.Screen name="PersonalForm" component={PersonalForm} />
      <App.Screen name="HealthForm" component={HealthForm} />
      <App.Screen name="AddressForm" component={AddressForm} />
    </App.Navigator>
  );
}

export default Routes;
