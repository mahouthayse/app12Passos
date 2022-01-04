import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../Pages/Home';
import Steps from '../Pages/Steps/HomeSteps';
import Register from "../Pages/Register";

export default function Routes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Passos" component={Steps} options={{ headerShown: false }} />
    </Navigator>
  );
}
