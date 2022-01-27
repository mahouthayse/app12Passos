import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from './tab';
import Step1 from '../../Pages/Steps/Step1';
import Step2 from '../../Pages/Steps/Step2';
import Step3 from '../../Pages/Steps/Step3';
import Step4 from '../../Pages/Steps/Step4';
import Step5 from '../../Pages/Steps/Step5';
import Step6 from '../../Pages/Steps/Step6';
import Step7 from '../../Pages/Steps/Step7';
import Step8 from '../../Pages/Steps/Step8';
import Step9 from '../../Pages/Steps/Step9';
import Step10 from '../../Pages/Steps/Step10';
import Step11 from '../../Pages/Steps/Step11';
import Step12 from '../../Pages/Steps/Step12';
import PostTestimonial from "../../Pages/Testimonials/PostTestimonial";
import TestimonialDetails from "../../Pages/Testimonials/TestimonialDetails";
import Goal from "../../Pages/Goal";
import Journal from "../../Pages/Journal";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabRoutes" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 1" component={Step1} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 2" component={Step2} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 3" component={Step3} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 4" component={Step4} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 5" component={Step5} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 6" component={Step6} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 7" component={Step7} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 8" component={Step8} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 9" component={Step9} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 10" component={Step10} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 11" component={Step11} options={{ headerShown: false }} />
      <Stack.Screen name="Passo 12" component={Step12} options={{ headerShown: false }} />
      <Stack.Screen name="Escrever Relato" component={PostTestimonial} options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes do Relato" component={TestimonialDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Objetivo" component={Goal} options={{ headerShown: false }} />
        <Stack.Screen name="Diário" component={Journal} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}