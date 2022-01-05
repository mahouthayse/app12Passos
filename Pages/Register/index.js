import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Button} from "react-native-paper";
import {BlueView, WhiteText} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import Logo from "../../assets/Logo.png"
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import {AlertBar} from "../../Components/AlertBar";
import AuthContext from "../../contexts/auth";

export default function Register() {
    const { userData, setUserData } = useContext(AuthContext);
    const { navigate } = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertSnackBar, setAlertSnackBar] = useState({
        visible: false,
        message: undefined,
        snackbarType: undefined,
    });

    async function handleRegister() {
        try {
            const response = await api.post('/auth/store', {
                name,
                email,
                password
            });
            setUserData({...userData, id: response.data._id, token: response.data.token, name: response.data.name});
            navigate("Home");
        } catch (error) {
            console.log(error);
            setAlertSnackBar({
                visible: true,
                message: error?.response?.data?.error,
                snackbarType: "fail",
            });
        }
    }

    return (
        <BlueView>
            <View style={{width:'90%',height:'100%', display: 'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <Image source={Logo} style={{alignSelf:'center', height:80, width:80}}/>

                <View>
                    <WhiteText style={{alignSelf:'center', marginVertical:16}}>Crie uma conta agora</WhiteText>
                    <TextInput
                        type="text"
                        onChangeText={(name) => setName(name)}
                        style={global.inputPrimary}
                        placeholder='Nome'
                        placeholderTextColor={colors.white}
                    />

                    <TextInput
                        type="email"
                        onChangeText={(email) => setEmail(email.toLowerCase().trim())}
                        style={global.inputPrimary}
                        placeholder='E-mail'
                        placeholderTextColor={colors.white}
                    />
                    <TextInput
                        onChangeText={(password) => setPassword(password)}
                        type="password"
                        secureTextEntry={true}
                        style={global.inputPrimary}
                        placeholder='Senha'
                        placeholderTextColor={colors.white}
                    />
                </View>

                <View>
                    <Button mode='contained' style={global.buttonSecondary} labelStyle={global.labelSecondary} onPress={handleRegister} contentStyle={{width:'100%', height:45}}>Cadastrar</Button>
                </View>

                <Button mode='text' labelStyle={global.labelPrimary} onPress={() => navigate("Login")}>JÁ POSSUI CONTA? ENTRAR</Button>
            </View>
            <AlertBar
                visible={alertSnackBar.visible}
                message={alertSnackBar.message}
                type={alertSnackBar.snackbarType}
                onChange={() => setAlertSnackBar({ ...alertSnackBar, visible: false })}
            />
        </BlueView>
    );
}

