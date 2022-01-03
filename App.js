import React from 'react';
import AppLoading from 'expo-app-loading';
import Login from "./Pages/Login";
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import {
  DancingScript_700Bold
} from '@expo-google-fonts/dancing-script';
import Home from "./Pages/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    montserrat_thin: Montserrat_100Thin,
    montserrat_extralight: Montserrat_200ExtraLight,
    montserrat_light: Montserrat_300Light,
    montserrat_regular: Montserrat_400Regular,
    montserrat_medium: Montserrat_500Medium,
    montserrat_semibold: Montserrat_600SemiBold,
    montserrat_bold: Montserrat_700Bold,
    montserrat_extrabold: Montserrat_800ExtraBold,
    montserrat_black: Montserrat_900Black,
    bebas_regular: BebasNeue_400Regular,
    dancing_script_bold: DancingScript_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
        <Home/>
    );
  }
}