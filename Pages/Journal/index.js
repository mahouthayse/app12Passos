
import React, {useContext, useState} from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../Style/globalStyles";
import {ScrollView, View, TextInput, StyleSheet} from "react-native";
import NavBar from "../../Components/NavBar";
import colors from "../../Style/colors";
import {Button, Chip} from "react-native-paper";
import global from "../../Style/global";
import AuthContext from "../../contexts/auth";

const mood = [
    { label: 'Irritado', value: 'Irritado'},
    { label: 'Calmo', value: 'Calmo'},
    { label: 'Triste', value: 'Triste'},
    { label: 'Com raiva', value: 'Com raiva'},
    { label: 'Feliz', value: 'Feliz'},
    { label: 'Ansioso', value: 'Ansioso'},
    { label: 'Nervoso', value: 'Nervoso'}
]

const physicalActivity = [
    { label: 'Nenhuma', value: 'Nenhuma'},
    { label: 'Baixa Intensidade', value: 'Baixa Intensidade'},
    { label: 'Média Intensidade', value: 'Média Intensidade'},
    { label: 'Alta', value: 'Alta'}
]

const sleep = [
    { label: 'Bom', value: 'Bom'},
    { label: 'Regular', value: 'Regular'},
    { label: 'Ruim', value: 'Ruim'}
]

const food = [
    { label: 'Bom', value: 'Bom'},
    { label: 'Regular', value: 'Regular'},
    { label: 'Ruim', value: 'Ruim'}
]

const symptoms = [
    { label: 'Náusea', value: 'Náusea '},
    { label: 'Tremores ', value: 'Tremores'},
    { label: 'Alterações de humor', value: 'Alterações de humor'},
    { label: 'Tontura', value: 'Tontura'},
    { label: 'Insônia ', value: 'Insônia'},
    { label: 'Dor de cabeça', value: 'Dor de cabeça'},
    { label: 'Cansaço', value: 'Cansaço'}
]


const styles = StyleSheet.create({
    label: {
        fontFamily:'montserrat_bold',
        textTransform:'uppercase',
        marginBottom:8
    },
    row: {
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:10
    },
    chip:{
        backgroundColor:'#F0F3F8',
        borderRadius:15,
        borderColor:'#F0F3F8',
        borderWidth:1,
        borderStyle:'solid',
        margin:4
    },
    chipText:{
        fontFamily:'montserrat_semibold',
        fontSize:13,
        color:'#8D92A3'
    }
});

export default function Journal() {
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const [journal, setJournal] = useState({
        user: userData.id,
        mood: [''],
        physical_activity:'',
        sleep:'',
        feed:'',
        symptoms:[''],
        date: new Date(),
        observations:''
    })

    function setSymptoms(index){
        const array = []
        array.push(index)
        setJournal({...journal, symptoms: array})
    }

    return (
        <View style={{flex:1, backgroundColor:`${colors.white}`}}>
            <NavBar title="Diário" url="Home"/>
            <ScrollView style={{padding:20}}>

                <TextPrimary style={styles.label}>Como está o seu humor?</TextPrimary>
               <View style={styles.row}>
                   {mood.map( index => {
                       return(<Chip onPress={() => console.log('Pressed')} key={index.label} style={styles.chip} textStyle={styles.chipText}>{index.label}</Chip>)
                   })}
               </View>

                <TextPrimary style={styles.label}>Praticou atividade física?</TextPrimary>
                <View style={styles.row}>
                    {physicalActivity.map( index => {
                        return( <Chip onPress={() => setJournal({...journal, physical_activity: index.value})} selected={(journal.physical_activity === index.label)} key={index.label} style={styles.chip} textStyle={styles.chipText}>{index.label}</Chip>)
                    })}
                </View>

                <TextPrimary style={styles.label}>Como está o seu sono?</TextPrimary>
                <View style={styles.row}>
                    {sleep.map( index => {
                        return( <Chip onPress={() => setJournal({...journal, sleep: index.value})} selected={(journal.sleep === index.label)} key={index.label} style={styles.chip} textStyle={styles.chipText}>{index.label}</Chip>)
                    })}
                </View>

                <TextPrimary style={styles.label}>Como está sua alimentação?</TextPrimary>
                <View style={styles.row}>
                    {food.map( index => {
                        return(<Chip onPress={() => setJournal({...journal, feed: index.value})}  selected={(journal.feed === index.label)} key={index.label} style={styles.chip} textStyle={styles.chipText}>{index.label}</Chip>)
                    })}
                </View>

                <TextPrimary style={styles.label}>Teve algum sintoma físico?</TextPrimary>
                <View style={styles.row}>
                    {symptoms.map( index => {
                        return(<Chip onPress={() => setSymptoms(index.value)} key={index.label} style={styles.chip} textStyle={styles.chipText}>{index.label}</Chip>)
                    })}
                </View>

                <TextPrimary style={styles.label}>Anote aqui o que quiser</TextPrimary>

                <TextInput
                    type="text"
                    onChangeText={(text) => setJournal({...journal, observations: text}) }
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


                <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() => {}} contentStyle={{width:'100%', height:45}}>Salvar</Button>

            </ScrollView>
        </View>
    );
}

