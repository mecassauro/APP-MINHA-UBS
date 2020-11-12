import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import HealthForm from '../pages/HealthForm';
import PersonalForm from '../pages/PersonalForm';
import AddressForm from '../pages/AddressForm';
import Dependents from '../pages/Dependents';

const App = createStackNavigator();

function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#0669b7'},
      }}
      initialRouteName="Home">
      <App.Screen name="Home" component={Home} />
      <App.Screen name="PersonalForm" component={PersonalForm} />
      <App.Screen name="HealthForm" component={HealthForm} />
      <App.Screen name="AddressForm" component={AddressForm} />
      <App.Screen name="Dependents" component={Dependents} />
    </App.Navigator>
  );
}

export default AppRoutes;
