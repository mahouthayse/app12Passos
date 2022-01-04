import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../Pages/Login';
import Cadastro from '../Pages/Register';

export default function Routes() {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Navigator>
  );
}
