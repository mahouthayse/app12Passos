import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../Pages/Home";
import Steps from "../../Pages/Steps/HomeSteps";
import ListTestimonials from "../../Pages/Testimonials/ListTestimonials";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const CustomText = ({ children }) => <Text style={{ fontSize: 11 }}>{children}</Text>;

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        return {
          tabBarActiveTintColor: '#F7B579',
          tabBarInactiveTintColor: '#22242A',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabel: () => {
            if (route.name === 'Home') return navigation.isFocused() ? <CustomText>Início</CustomText> : null;
            else return navigation.isFocused() ? <CustomText>{route.name}</CustomText> : null;
          }
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Entypo name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name='Passos' 
        component={Steps} 
        options={{ tabBarIcon: ({ color, size }) => <FontAwesome5 name="shoe-prints" size={size} color={color} /> }}
      />
      <Tab.Screen
        name='Relatos'
        component={ListTestimonials}
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="notes" size={size} color={color} /> }}
      />
      <Tab.Screen
        name='Questionário'
        component={Home}
        options={{ tabBarIcon: ({ color, size }) => <AntDesign name="profile" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  )
}