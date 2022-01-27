
import React, {useState, useContext} from 'react';
import {ScrollView, View, Image, TextInput, TouchableOpacity} from "react-native";
import NavBar from "../../Components/NavBar";
import global from "../../Style/global";
import colors from "../../Style/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import {TextPrimary} from "../../Style/globalStyles";
import { format } from 'date-fns'
import {Button} from "react-native-paper";
import AuthContext from "../../contexts/auth";
import {AlertBar} from "../../Components/AlertBar";
import api from "../../services/api";
import {useNavigation} from "@react-navigation/native";

export default function Goal() {
    const { navigate } = useNavigation();
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const id = userData.id;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false);
    const [reason, setReason] = useState('');
    const [alertSnackBar, setAlertSnackBar] = useState({
        visible: false,
        message: undefined,
        snackbarType: undefined,
    });


    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate || Date();
        setStartDate(new Date(currentDate));
        setShowStartDate(false);
    };

    const onChangeEndDate = (event, selectedDate) => {
        const currentDate = selectedDate || endDate || Date();
        setEndDate(new Date(currentDate));
        setShowEndDate(false);
    };

    async function postGoal(){
        try {
            await api.post('/objective', {
                user:id,
                start_date: startDate,
                end_date: endDate,
                reason
            }, { headers: { Authorization: `Bearer ${token}` }});
            setAlertSnackBar({
                visible: true,
                message: 'Você definiu um objetivo!',
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
            <NavBar title="Defina um objetivo" url="Home"/>
            <View style={{padding:16, backgroundColor:`${colors.white}`, flex:1}}>

                <TextPrimary style={{fontFamily:'montserrat_bold', textTransform:'uppercase', marginBottom:8}}>Quando você parou?</TextPrimary>
                <TouchableOpacity onPress={(showStartDate) => setShowStartDate(true)} style={{borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:`${colors.grey}`, marginBottom:10}}>
                    <TextPrimary>
                      {format(new Date(startDate), 'dd/MM/yyyy')}
                    </TextPrimary>
                </TouchableOpacity>

                {showStartDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={startDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeStartDate}
                    />
                )}

                <TextPrimary style={{fontFamily:'montserrat_bold', textTransform:'uppercase', marginBottom:8}}>Defina seu objetivo</TextPrimary>

                <TouchableOpacity onPress={(showStartDate) => setShowEndDate(true)} style={{borderBottomWidth:1, borderBottomStyle:'solid', borderBottomColor:`${colors.grey}`, marginBottom:10}}>
                    <TextPrimary>
                        {format(new Date(endDate), 'dd/MM/yyyy')}
                    </TextPrimary>
                </TouchableOpacity>

                {showEndDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={endDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChangeEndDate}
                    />
                )}

                <TextPrimary style={{fontFamily:'montserrat_bold', textTransform:'uppercase', marginBottom:8}}>O que te motiva a parar?</TextPrimary>

                <TextInput
                    type="text"
                    onChangeText={(reason) => setReason(reason)}
                    style={global.inputPrimary}
                    placeholder='Escreva aqui'
                    placeholderTextColor={colors.text}
                />

                <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() => postGoal()} contentStyle={{width:'100%', height:45}}>Definir objetivo</Button>

                <AlertBar
                    visible={alertSnackBar.visible}
                    message={alertSnackBar.message}
                    type={alertSnackBar.snackbarType}
                    onChange={() => setAlertSnackBar({ ...alertSnackBar, visible: false })}
                />
            </View>
        </View>
    );
}

