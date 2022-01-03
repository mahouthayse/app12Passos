import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Button} from "react-native-paper";
import {BlueView, WhiteText} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";
import Logo from "../../assets/Logo.png"

export default function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                    <Button mode='contained' style={global.buttonSecondary} labelStyle={global.labelSecondary} onPress={() =>{ console.log('ola')}} contentStyle={{width:'100%', height:45}}>Cadastrar</Button>
                </View>

                <Button mode='text' labelStyle={global.labelPrimary} onPress={() => console.log('hello')}>JÁ POSSUI CONTA? ENTRAR</Button>
            </View>
        </BlueView>
    );
}

