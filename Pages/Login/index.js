import React, {useContext, useState} from 'react';
import { View, TextInput, Image} from 'react-native';
import {Button} from "react-native-paper";
import {BlueView, WhiteText} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import Logo from "../../assets/Logo.png"
import api from '../../services/api';
import {useNavigation} from "@react-navigation/native";
import {AlertBar} from "../../Components/AlertBar";
import AuthContext from '../../contexts/auth';

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const { navigate } = useNavigation();
    const [data, setData] = useState({ email: null, password: null });
    const [alertSnackBar, setAlertSnackBar] = useState({
        visible: false,
        message: undefined,
        snackbarType: undefined,
    });

    async function handleLogin() {
        try {
            const response = await api.post('/auth/login', data);
            setToken(response.data.token);
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
                    <WhiteText style={{alignSelf:'center', marginVertical:16}}>Faça login para acessar</WhiteText>
                    <TextInput
                        type="email"
                        onChangeText={(email) => setData({ ...data, email: email.toLowerCase().trim() })}
                        style={global.inputPrimary}
                        placeholder='E-mail'
                        placeholderTextColor={colors.white}
                    />
                    <TextInput
                        onChangeText={(password) => setData({ ...data, password })}
                        type="password"
                        secureTextEntry={true}
                        style={global.inputPrimary}
                        placeholder='Senha'
                        placeholderTextColor={colors.white}
                    />
                    <Button mode='text' style={{alignSelf:'flex-start'}} labelStyle={global.labelPrimary} onPress={() => console.log('hello')}>Esqueci a senha</Button>
                </View>

                <View>
                    <Button mode='contained' style={global.buttonSecondary} labelStyle={global.labelSecondary} onPress={handleLogin} contentStyle={{width:'100%', height:45}}>Entrar</Button>
                </View>

                <Button mode='text' labelStyle={global.labelPrimary} onPress={() => navigate("Cadastro")}>CRIAR CONTA</Button>
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

