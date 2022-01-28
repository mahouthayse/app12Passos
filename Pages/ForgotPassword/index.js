import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Button} from "react-native-paper";
import {BlueView, TextPrimary, TitlePrimary, ViewPrimary, WhiteText} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import LogoPrimary from "../../assets/LogoPrimary.png"
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import {AlertBar} from "../../Components/AlertBar";
import AuthContext from "../../contexts/auth";
import NavBar from "../../Components/NavBar";
import Logo from "../../assets/Logo.png";

export default function ForgotPassword() {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [alertSnackBar, setAlertSnackBar] = useState({
        visible: false,
        message: undefined,
        snackbarType: undefined,
    });


    return (
        <View style={{flex:1, backgroundColor:`${colors.white}`}}>
            <NavBar title="" url="Login"/>
            <ViewPrimary style={{justifyContent: 'flex-start'}}>
                    <View style={{marginTop:16}}>
                        <TitlePrimary style={{marginBottom:24}}>Esqueceu a senha?</TitlePrimary>
                        <TextPrimary>Se você precisa de ajuda para enviar seu novo código de recuperação de senha, digite seu e-mail abaixo.</TextPrimary>

                        <TextInput
                            type="email"
                            onChangeText={(email) => setEmail(email.toLowerCase().trim())}
                            style={global.inputPrimary}
                            placeholder='E-mail'
                            placeholderTextColor={colors.text}
                        />
                        <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() => {}} contentStyle={{width:'100%', height:45}}>Enviar</Button>

                        <Image source={LogoPrimary} style={{alignSelf:'center', height:80, width:80, marginVertical:32}}/>

                    </View>
                <AlertBar
                    visible={alertSnackBar.visible}
                    message={alertSnackBar.message}
                    type={alertSnackBar.snackbarType}
                    onChange={() => setAlertSnackBar({ ...alertSnackBar, visible: false })}
                />
            </ViewPrimary>
        </View>

    );
}

