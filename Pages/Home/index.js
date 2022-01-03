import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Avatar, Button} from "react-native-paper";
import {BlackText, TextPrimary, TitlePrimary, ViewPrimary} from "../../Style/globalStyles";
import global from "../../Style/global";
import colors from "../../Style/colors";

export default function Home() {
    return (
        <ViewPrimary>
            <View style={{display: 'flex', flexDirection:'row', width:'100%', justifyContent:'space-between', marginBottom:24}}>
                <View>
                    <TitlePrimary>Olá, Maria</TitlePrimary>
                    <TextPrimary>Você está há 100 dias sem beber.</TextPrimary>
                </View>
                <Avatar.Text size={60} label="XD" />
            </View>

            <View style={{display: 'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <View>
                    <BlackText>23</BlackText>
                    <TextPrimary>registros no diário</TextPrimary>
                </View>
                <Button mode='contained' compact={true} style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() =>{ console.log('ola')}}>Preencher Diário</Button>
            </View>


        </ViewPrimary>
    );
}

