import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.route';

import {useAuth} from '../hooks/auth';

function Routes() {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" colo="#999" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
