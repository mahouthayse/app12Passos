import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../Pages/Home";
import Steps from "../../Pages/Steps/HomeSteps";
import ListTestimonials from "../../Pages/Testimonials/ListTestimonials";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Passos' component={Steps} options={{ headerShown: false }} />
      <Tab.Screen name='Relatos' component={ListTestimonials} options={{ headerShown: false }} />
      <Tab.Screen name='Questionário' component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}