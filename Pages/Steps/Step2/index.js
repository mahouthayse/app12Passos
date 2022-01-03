
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo2 from "../../../assets/passo2.png";

export default function Step2() {
    return (
        <ScrollView >

            <Image source={Passo2} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

            <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 2</TitleManuscript>
                <TitlePrimary>
                    Viemos a acreditar que um Poder superior a nós mesmos poderia devolver-nos à sanidade.
                </TitlePrimary>
                <TextPrimary>
                    A partir do momento em que lê o Segundo Passo, a maioria dos novos em A.A. enfrenta um dilema, às
                    vezes, bastante sério.
                </TextPrimary>
                <TextPrimary>
                    Quantas vezes os temos ouvido reclamar: "olhem o que vocês fizeram conosco. Convenceram-nos de que
                    somos alcoólicos e que nossas vidas são ingovernáveis. Havendo nos reduzido a um estado de desespero
                    absoluto, agora nos informam que somente um Poder Superior poderá resolver nossa obsessão. Alguns de
                    nós recusam-se a acreditar em Deus, outros não conseguem acreditar e ainda outros acreditam na
                    existência de Deus, mas de forma alguma confiam que Ele levará a cabo este milagre. Pois é, meteram-nos
                    num beco sem saída, tudo bem, mas e agora, para onde vamos?"
                </TextPrimary>

            </View>
        </ScrollView>
    );
}

