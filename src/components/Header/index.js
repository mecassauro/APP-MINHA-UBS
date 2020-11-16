import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '../../hooks/auth';

import {Container, Title, Arrow, Log} from './styles';

function Header({title, logout, arrow, back}) {
  const {signOut} = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      {arrow && <Arrow onPress={() => navigation.goBack()} />}
      <Title>{title}</Title>
      {logout && <Log onPress={() => signOut()} />}
    </Container>
  );
}

export default Header;
