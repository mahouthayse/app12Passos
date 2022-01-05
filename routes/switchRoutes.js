import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { userData } = useContext(AuthContext);

  return userData.token ? <AppRoutes /> : <AuthRoutes />;
}
