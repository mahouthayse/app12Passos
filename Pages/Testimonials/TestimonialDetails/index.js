
import React, {useContext, useEffect, useState} from 'react';
import {TextPrimary, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import NavBar from "../../../Components/NavBar";
import api from "../../../services/api";
import AuthContext from "../../../contexts/auth";
import colors from "../../../Style/colors";
import {format} from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import {Feather} from "@expo/vector-icons";
import {ActivityIndicator} from "react-native-paper";


export default function TestimonialDetails({ route, navigation }) {
    const { id } = route.params;
    const { userData } = useContext(AuthContext);
    const token = userData.token;
    const [testimonial, setTestimonial] = useState({});
    const [loading, setLoading] = useState(true)

    async function fetchTestimonialDetails(){
        try {
            const response = await api.get(`/testimonials/${id}`, { headers: { Authorization: `Bearer ${token}` }});
            setTestimonial(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTestimonialDetails()
    }, [])

    if(loading){
        return (
            <View style={{flex:1, backgroundColor:`${colors.white}`, alignItems:'center', justifyContent:'center'}}>
                <ActivityIndicator size="large" animating={true} color={colors.primary} />
            </View>
            )
    } else{
        return (

            <View style={{flex:1, backgroundColor:`${colors.white}`}}>
                <NavBar title="" url="Relatos"/>
                <ScrollView>
                    <View style={{display: 'flex', flexDirection: 'column', padding:20}}>

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

                        <TitlePrimary style={{marginVertical:24}}>
                            {testimonial.title}
                        </TitlePrimary>
                        <TextPrimary>
                            {testimonial.text}
                        </TextPrimary>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

