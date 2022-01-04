import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from '../contexts/auth';

import Routes from './switchRoutes';

export default function Index() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
