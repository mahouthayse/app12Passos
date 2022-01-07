import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AppRoutes from './app.routes';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Register';
import ForgotPassword from "../Pages/ForgotPassword";

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Redefinir senha" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
    </Stack.Navigator>
  );
}
