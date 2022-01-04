
import React from 'react';
import {TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView, View, TouchableOpacity, ImageBackground} from "react-native";
import Passo1 from "../../../assets/passo1.png";
import Passo2 from "../../../assets/passo2.png";
import Passo3 from "../../../assets/passo3.png";
import Passo4 from "../../../assets/passo4.png";
import Passo5 from "../../../assets/passo5.png";
import Passo6 from "../../../assets/passo6.png";
import Passo7 from "../../../assets/passo7.png";
import Passo8 from "../../../assets/passo8.png";
import Passo9 from "../../../assets/passo9.png";
import Passo10 from "../../../assets/passo10.png";
import Passo11 from "../../../assets/passo11.png";
import Passo12 from "../../../assets/passo12.png";
import NavBar from "../../../Components/NavBar";
import colors from "../../../Style/colors";

export default function HomeSteps() {
    const steps = [
        {
            title: 'Passo 1',
            img: Passo1
        },
        {
            title: 'Passo 2',
            img: Passo2
        },
        {
            title: 'Passo 3',
            img: Passo3
        },
        {
            title: 'Passo 4',
            img: Passo4
        },
        {
            title: 'Passo 5',
            img: Passo5
        },
        {
            title: 'Passo 6',
            img: Passo6
        },
        {
            title: 'Passo 7',
            img: Passo7
        },
        {
            title: 'Passo 8',
            img: Passo8
        },
        {
            title: 'Passo 9',
            img: Passo9
        },
        {
            title: 'Passo 10',
            img: Passo10
        },
        {
            title: 'Passo 11',
            img: Passo11
        },
        {
            title: 'Passo 12',
            img: Passo12
        }
    ]

    return (
        <View style={{flex:1}}>
            <NavBar title="Os Doze Passos"/>
            <ScrollView>
               <ViewPrimary>
                   <View style={{width:'95%', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
                       {
                           steps.map( step => {
                               return(
                                   <TouchableOpacity style={{borderRadius: 20}} key={step.title}>
                                       <ImageBackground source={step.img} style={{width:150, height:150, alignItems: 'center', justifyContent:'center',  marginVertical:16}}
                                                        imageStyle={{borderRadius:10}}>
                                           <TitlePrimary style={{color: `${colors.white}`, elevation:2, fontSize:30}}>{step.title}</TitlePrimary>
                                       </ImageBackground>
                                   </TouchableOpacity>
                               )
                           }
                       )}
                   </View>
               </ViewPrimary>

            </ScrollView>
        </View>
    );
}

