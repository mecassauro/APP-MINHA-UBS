import React, {
  useCallback,
  useState,
  useContext,
  createContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

import api from '../services/api';

const AuthContext = createContext();

function AuthProvider({children}) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet([
        '@MinhaUBS:token',
        '@MinhaUBS:user',
      ]);
      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setUserData({token: token[1], user: JSON.parse(user[1])});
      }
      setLoading(false);
      SplashScreen.hide();
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const {token, user} = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    await AsyncStorage.multiSet([
      ['@MinhaUBS:token', token],
      ['@MinhaUBS:user', JSON.stringify(user)],
    ]);

    setUserData({token, user});
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.multiRemove(['@MinhaUBS:token', '@MinhaUBS:user']);
    setUserData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{signIn, signOut, user: userData.user, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {useAuth, AuthProvider};
