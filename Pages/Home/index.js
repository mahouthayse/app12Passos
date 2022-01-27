import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Avatar, Button} from "react-native-paper";
import {BlackText, TextPrimary, TitlePrimary, ViewPrimary} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import {useNavigation} from "@react-navigation/native";
import Passos from "../../assets/passo1.png";
import Relatos from "../../assets/passo11.png";
import AuthContext from "../../contexts/auth";

export default function Home() {
    const { navigate } = useNavigation();
    const { userData } = useContext(AuthContext);

    return (
        <ViewPrimary style={{justifyContent:'space-between'}}>
            <View style={{display: 'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', marginVertical:24}}>
                <View>
                    <TitlePrimary>Olá, {userData.name.split(' ').slice(0,1).join(' ')}</TitlePrimary>
                    <TextPrimary>Você está há 100 dias sem beber.</TextPrimary>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <View>
                    <BlackText>23</BlackText>
                    <TextPrimary>registros no diário</TextPrimary>
                </View>
                <Button mode='contained' compact={true} style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() =>navigate("Diário")}>Preencher Diário</Button>
            </View>
            <View style={{width:'100%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
                <TouchableOpacity onPress={() =>navigate("Passos")}>
                    <ImageBackground source={Passos} style={{width:160, padding:10, height:160, alignItems: 'center', justifyContent:'center',  marginVertical:16}}
                                     imageStyle={{borderRadius:10}}>
                        <TitlePrimary style={{color: `${colors.white}`, elevation:2, fontSize:30}}>Relembre os 12 Passos</TitlePrimary>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() =>navigate("Relatos")}>
                    <ImageBackground source={Relatos} style={{width:160, padding:10, height:160, alignItems: 'center', justifyContent:'center',  marginVertical:16}}
                                     imageStyle={{borderRadius:10}}>
                        <TitlePrimary style={{color: `${colors.white}`, elevation:2, fontSize:30}}>Relatos de Vivência</TitlePrimary>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() =>navigate("Objetivo")}>
                    <ImageBackground source={Relatos} style={{width:160, padding:10, height:160, alignItems: 'center', justifyContent:'center',  marginVertical:16}}
                                     imageStyle={{borderRadius:10}}>
                        <TitlePrimary style={{color: `${colors.white}`, elevation:2, fontSize:30}}>Defina um objetivo</TitlePrimary>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </ViewPrimary>
    );
}

