import React, {useContext, useState} from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import NavBar from "../../../Components/NavBar";
import global from "../../../Style/global";
import colors from "../../../Style/colors";
import api from "../../../services/api";
import {AlertBar} from "../../../Components/AlertBar";
import AuthContext from "../../../contexts/auth";

export default function PostTestimonial() {
    const { navigate } = useNavigation();
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [alertSnackBar, setAlertSnackBar] = useState({
        visible: false,
        message: undefined,
        snackbarType: undefined,
    });

    async function handlePost() {
        try {
            await api.post('/testimonials', {
                user: userData.id,
                title,
                text
            }, { headers: { Authorization: `Bearer ${token}` }});
            setAlertSnackBar({
                visible: true,
                message: 'Você compartilhou um novo relato!',
                snackbarType: "success",
            });
            setTimeout( () => {
                navigate("Home");
            }, 500)
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
        <View style={{flex:1}}>
            <NavBar title="Compartilhe seu relato" url="Relatos"/>
            <ScrollView style={{ width:'100%', backgroundColor:`${colors.white}`, padding:20}}>
                <TextInput
                    type="text"
                    onChangeText={(title) => setTitle(title)}
                    style={{
                        marginBottom:16,
                        borderBottomWidth: 1,
                        height:50,
                        borderBottomColor: `${colors.grey}`,
                        paddingBottom:20,
                        color: `${colors.title}`,
                        fontFamily: 'bebas_regular',
                        fontSize: 28,
                        textAlignVertical: 'top'
                    }}
                    placeholder='Título'
                    placeholderTextColor={colors.text}
                    multiline={true}
                    numberOfLines={6}
                />

                <TextInput
                    type="text"
                    onChangeText={(text) => setText(text)}
                    style={{
                        marginBottom:16,
                        padding:8,
                        color: `${colors.title}`,
                        fontFamily: 'montserrat_medium',
                        fontSize: 14,
                        height:50,
                        textAlignVertical: 'top'
                    }}
                    placeholder='O que você gostaria de compartilhar?'
                    placeholderTextColor={colors.text}
                    multiline={true}
                    numberOfLines={30}
                />
            </ScrollView>
            <View style={{padding:20, backgroundColor:`${colors.white}`}}>
                <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() => handlePost()} contentStyle={{width:'100%', height:45}}>Compartilhar relato</Button>
            </View>
            <AlertBar
                visible={alertSnackBar.visible}
                message={alertSnackBar.message}
                type={alertSnackBar.snackbarType}
                onChange={() => setAlertSnackBar({ ...alertSnackBar, visible: false })}
            />
        </View>
    );
}

