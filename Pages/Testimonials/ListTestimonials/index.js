
import React, {useContext, useEffect, useState} from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView, View, Image, TouchableOpacity} from "react-native";
import NavBar from "../../../Components/NavBar";
import colors from "../../../Style/colors";
import api from "../../../services/api";
import AuthContext from "../../../contexts/auth";
import {Button} from "react-native-paper";
import global from "../../../Style/global";
import {useNavigation} from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {format} from "date-fns";
import ptBr from 'date-fns/locale/pt-BR'

export default function ListTestimonials() {
    const { navigate } = useNavigation();
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const [testimonials, setTestimonials] = useState([]);

    async function fetchTestimonials(){
        try {
            const response = await api.get('/testimonials?limit=20&page=1', { headers: { Authorization: `Bearer ${token}` }});
            setTestimonials(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTestimonials()
    }, [])

    return (
        <View style={{flex:1, backgroundColor:`${colors.white}`}}>
            <NavBar title="Relatos de vivência" url="Home"/>
            <ScrollView >

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    {
                        testimonials.map(testimonial => {
                            return (
                                <TouchableOpacity key={testimonial._id} style={{marginVertical:16}}
                                                  onPress={ () => navigate("Detalhes do Relato", { id: testimonial._id })}>

                                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                        <TextPrimary style={{color: `${colors.primary}`, textTransform:'uppercase', fontSize: 12, letterSpacing: 2, flex:1}}>
                                            {format(new Date(testimonial.createdAt), 'dd MMMM', {
                                            locale: ptBr
                                        })
                                            }</TextPrimary>

                                        <View style={{flexDirection:'row', justifyContent:'flex-end', flex:1}}>
                                            <Feather
                                                name="message-circle"
                                                size={20}
                                                color={colors.text}
                                                style={{ marginRight: 8 }}
                                            />
                                            <TextPrimary style={{marginRight:16}}>13</TextPrimary>
                                            <Feather
                                                name="heart"
                                                size={20}
                                                color={colors.text}
                                                style={{ marginRight: 8 }}
                                            />
                                            <TextPrimary>13</TextPrimary>
                                        </View>
                                    </View>
                                    <TitlePrimary>
                                        {testimonial.title}
                                    </TitlePrimary>
                                    <TextPrimary>
                                        {testimonial.text.slice(0,180)}...
                                    </TextPrimary>
                                    <View style={{width:120, alignSelf:'flex-end'}}>
                                        <Button mode='contained'
                                                style={{
                                                    backgroundColor: `${colors.primary}`,
                                                    borderRadius: 100,
                                                    elevation: 0
                                                }}
                                                labelStyle={{
                                                    fontFamily: 'montserrat_medium',
                                                    fontSize: 13,
                                                    color: `${colors.white}`,
                                                    textTransform:'none'
                                                }}
                                                onPress={ () => navigate("Detalhes do Relato", { id: testimonial._id })}
                                                contentStyle={{
                                                    height:35}}
                                        >
                                            Ver mais
                                        </Button>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>
            <View style={{flexDirection:'row', padding:20, justifyContent:'space-between'}}>
                {/*<Button mode='contained' style={{*/}
                {/*    backgroundColor: `${colors.secondary}`,*/}
                {/*    borderRadius: 100,*/}
                {/*    elevation: 0,*/}
                {/*    marginVertical:8*/}
                {/*}} labelStyle={global.labelPrimary} onPress={() => navigate("Escrever Relato")} contentStyle={{width:165, height:45}}>Meus relatos</Button>*/}

                <Button mode='contained' style={global.buttonPrimary} labelStyle={global.labelPrimary} onPress={() => navigate("Escrever Relato")} contentStyle={{width:165, height:45}}>Publicar novo</Button>
            </View>
        </View>
    );
}

