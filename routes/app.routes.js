import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from '../Pages/Home';
import Steps from '../Pages/Steps/HomeSteps';

export default function Routes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Novo Cliente" component={Steps} options={{ headerShown: false }} />
    </Navigator>
  );
}
