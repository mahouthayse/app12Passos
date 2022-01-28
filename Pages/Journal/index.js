
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
    selectedChip: {
        backgroundColor: '#BEBEBE'
    },
    chipText:{
        fontFamily:'montserrat_semibold',
        fontSize:13,
        color:'#8D92A3'
    },
    selectedChipText: {
        color: '#4b4b4b'
    }
});

export default function Journal() {
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const [journal, setJournal] = useState({
        user: userData.id,
        mood: [],
        physical_activity:'',
        sleep:'',
        feed:'',
        symptoms:[],
        date: new Date(),
        observations:''
    })

    function addRemoveItemArray({ value, key }) {
        const arr = [...journal[key]];
        const index = arr.indexOf(value);
        if (index !== -1) arr.splice(index, 1);
        else arr.push(value);
        setJournal({ ...journal, [key]: arr });
    }

    function selectUnselect({ value, key }) {
        const data = { ...journal };
        const option = data[key];
        if (!option) data[key] = value;
        else if (option !== '' && option !== value) data[key] = value;
        else data[key] = '';
        setJournal(data);
    }

    return (
        <View style={{flex:1, backgroundColor:`${colors.white}`}}>
            <NavBar title="Diário" url="Home"/>
            <ScrollView style={{ paddingHorizontal: 20 }}>

                <TextPrimary style={styles.label}>Como está o seu humor?</TextPrimary>
               <View style={styles.row}>
                   {mood.map(({ label, value }) => (
                        <Chip
                            selected={journal.mood.includes(value)}
                            onPress={() => addRemoveItemArray({ value, key: 'mood' })}
                            key={label}
                            style={journal.mood.includes(value) ? [styles.chip, styles.selectedChip] : styles.chip}
                            textStyle={journal.mood.includes(value) ? [styles.chipText, styles.selectedChipText] : styles.chipText}
                        >
                            {label}
                        </Chip>
                   ))}
               </View>

                <TextPrimary style={styles.label}>Praticou atividade física?</TextPrimary>
                <View style={styles.row}>
                    {physicalActivity.map(({ label, value }) => (
                        <Chip
                            selected={journal.physical_activity.includes(value)}
                            onPress={() => addRemoveItemArray({ value, key: 'physical_activity'})}
                            key={label}
                            style={journal.physical_activity.includes(value) ? [styles.chip, styles.selectedChip] : styles.chip}
                            textStyle={journal.physical_activity.includes(value) ? [styles.chipText, styles.selectedChipText] : styles.chipText}
                        >
                            {label}
                        </Chip>
                   ))}
                </View>

                <TextPrimary style={styles.label}>Como está o seu sono?</TextPrimary>
                <View style={styles.row}>
                    {sleep.map(({ label, value }) => (
                        <Chip
                            selected={journal.sleep.includes(value)}
                            onPress={() => selectUnselect({ value, key: 'sleep' })}
                            key={label}
                            style={journal.sleep.includes(value) ? [styles.chip, styles.selectedChip] : styles.chip}
                            textStyle={journal.sleep.includes(value) ? [styles.chipText, styles.selectedChipText] : styles.chipText}
                        >
                            {label}
                        </Chip>
                   ))}
                </View>

                <TextPrimary style={styles.label}>Como está sua alimentação?</TextPrimary>
                <View style={styles.row}>
                    {food.map(({ label, value }) => (
                        <Chip
                            selected={journal.feed.includes(value)}
                            onPress={() => selectUnselect({ value, key: 'feed' })}
                            key={label}
                            style={journal.feed.includes(value) ? [styles.chip, styles.selectedChip] : styles.chip}
                            textStyle={journal.feed.includes(value) ? [styles.chipText, styles.selectedChipText] : styles.chipText}
                        >
                            {label}
                        </Chip>
                   ))}
                </View>

                <TextPrimary style={styles.label}>Teve algum sintoma físico?</TextPrimary>
                <View style={styles.row}>
                    {symptoms.map(({ label, value }) => (
                        <Chip
                            selected={journal.symptoms.includes(value)}
                            onPress={() => addRemoveItemArray({ value, key: 'symptoms'})}
                            key={label}
                            style={journal.symptoms.includes(value) ? [styles.chip, styles.selectedChip] : styles.chip}
                            textStyle={journal.symptoms.includes(value) ? [styles.chipText, styles.selectedChipText] : styles.chipText}
                        >
                            {label}
                        </Chip>
                   ))}
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

