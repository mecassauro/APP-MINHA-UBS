import React, {useCallback, useState, useContext, createContext} from 'react';

import api from '../services/api';

const AuthContext = createContext();

function AuthProvider({children}) {
  const [userData, setUserData] = useState({});

  const signIn = useCallback(async ({email, password}) => {
    const response = await api.post('session', {
      email,
      password,
    });

    const {token, user} = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    setUserData({token, user});
  }, []);

  const signOut = useCallback(() => {
    setUserData({});
  }, []);

  return (
    <AuthContext.Provider value={{signIn, signOut}}>
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
