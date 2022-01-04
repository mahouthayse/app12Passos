import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Button} from "react-native-paper";
import {BlueView, WhiteText} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import Logo from "../../assets/Logo.png"
import api from '../../services/api';

export default function Login() {
    const [data, setData] = React.useState({ email: null, password: null });

    async function handleLogin() {
        try {
            await api.post('/auth/login', data);
        } catch (error) {
            console.log(error);
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
                    <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() =>{ console.log('ola')}} contentStyle={{width:'100%', height:45}}>Entrar com Google</Button>
                </View>

                <Button mode='text' labelStyle={global.labelPrimary} onPress={() => console.log('hello')}>CRIAR CONTA</Button>
            </View>
        </BlueView>
    );
}

