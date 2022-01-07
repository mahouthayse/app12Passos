import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../Pages/Home";
import Steps from "../../Pages/Steps/HomeSteps";
import ListTestimonials from "../../Pages/Testimonials/ListTestimonials";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false, tabBarLabel: 'Início' }}
      />
      <Tab.Screen name='Passos' component={Steps} options={{ headerShown: false }} />
      <Tab.Screen
        name='Relatos'
        component={ListTestimonials}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name="notes" size={size} color={color} />
        }}
      />
      <Tab.Screen
        name='Questionário'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}