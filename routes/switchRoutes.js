import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { token } = useContext(AuthContext);

  return token ? <AppRoutes /> : <AuthRoutes />;
}
