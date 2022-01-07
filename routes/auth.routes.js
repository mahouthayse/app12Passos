import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import AppRoutes from './app.routes';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Register';
import ForgotPassword from "../Pages/ForgotPassword";

export default function Routes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Screen name="Redefinir senha" component={ForgotPassword} options={{ headerShown: false }} />
      <Screen name="AppRoutes" component={AppRoutes} />
    </Navigator>
  );
}
