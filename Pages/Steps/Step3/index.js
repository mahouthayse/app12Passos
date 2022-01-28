
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo3 from "../../../assets/passo3.png";
import NavBar from "../../../Components/NavBar";
import colors from '../../../Style/colors';

export default function Step3() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 3" url="Passos"/>
            <ScrollView style={{ backgroundColor: colors.white }}>

                <Image source={Passo3} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 3</TitleManuscript>
                    <TitlePrimary>
                        Decidimos entregar nossa vontade e nossa vida aos cuidados de Deus, na forma em que O concebíamos.
                    </TitlePrimary>
                    <TextPrimary>
                        A prática do Terceiro Passo é como abrir uma porta que até então parecia estar fechada à chave. Tudo
                        de que precisamos é a chave e a decisão de abrir a porta. Há apenas uma chave, e se chama boa-vontade.
                        Olhando-se através dela, ver-se-á um caminho ao lado do qual há uma inscrição que diz: "Eis o
                        caminho em direção àquela fé que realmente funciona."
                    </TextPrimary>
                    <TextPrimary>
                        Nos primeiros dois passos, refletimos. Vimos que éramos impotentes perante o álcool, mas também
                        percebemos que alguma espécie de fé, mesmo que fosse somente em A.A., estava ao alcance de qualquer
                        um.
                    </TextPrimary>
                    <TextPrimary>
                        Essas conclusões não requereram ação; requereram apenas aceitação.
                    </TextPrimary>
                    <TextPrimary>
                        Como todos os outros, o Terceiro Passo pede uma ação positiva, pois é somente através de ação que
                        conseguimos interromper a vontade própria que sempre impediu a entrada de Deus - ou, se preferir,
                        de um Poder Superior - em nossas vidas. A fé é necessária certamente, porém a fé isolada pode
                        resultar em nada. Podemos ter fé, mas manter Deus fora de nossas vidas. Portanto, o nosso problema
                        agora é descobrir como e por quais meios específicos, poderemos deixá-Lo entrar. O Terceiro Passo
                        representa nossa primeira tentativa de alcançar isso. Aliás, a eficácia de todo programa de A.A.
                        dependerá de quão bem e sinceramente tenhamos tentado chegar à decisão de "entregar nossa vontade
                        e nossa vida aos cuidados de Deus, na forma em que O concebíamos"
                    </TextPrimary>

                </View>
            </ScrollView>
        </View>
    );
}

