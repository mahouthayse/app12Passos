
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo6 from "../../../assets/passo6.png";
import NavBar from "../../../Components/NavBar";
import colors from '../../../Style/colors';

export default function Step6() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 6" url="Passos"/>
            <ScrollView style={{ backgroundColor: colors.white }}>

                <Image source={Passo6} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 6</TitleManuscript>
                    <TitlePrimary>
                        Prontificamo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.
                    </TitlePrimary>
                    <TextPrimary>
                        "Este é o passo que separa os adultos das crianças...".
                    </TextPrimary>
                    <TextPrimary>
                        Eis o que declara um clérigo muito querido que, por sinal, é um dos melhores amigos de A.A. Ele
                        prossegue para explicar que qualquer pessoa capaz de ter suficiente boa vontade e honestidade para,
                        repetidamente, experimentar o Sexto Passo com respeito a todos seus defeitos - em absoluto sem
                        qualquer reserva - tem realmente andado um bom pedaço no campo espiritual e, portanto, merece ser
                        chamado de um homem que está sinceramente empenhado em crescer à imagem e semelhança do Criador.
                    </TextPrimary>
                    <TextPrimary>
                        Evidentemente, a tão discutida pergunta sobre se Deus pode - e quer, sob certas condições - remover
                        os defeitos de caráter, será respondida afirmativamente pela quase totalidade dos membros de A.A.
                        Para eles, essa proposição não será apenas teoria; será simplesmente uma das maiores realidades de
                        suas vidas. Geralmente oferecerão suas provas em afirmações como esta:  "É claro, estava vencido,
                        completamente derrotado. Minha própria força de vontade simplesmente não funcionava no caso do
                        álcool. Mudanças de ambiente, os melhores esforços de parentes, amigos, médicos e clérigos nada
                        adiantaram no caso do meu alcoolismo. Simplesmente não conseguia parar de beber, e nenhum ser
                        humano parecia ter a capacidade de me ajudar. Porém, quando me dispus a colocar a casa em ordem
                        e roguei a um Poder Superior, Deus, como eu O concebia, que me libertasse, então, minha obsessão
                        para o beber sumiu. Simplesmente foi arrancada de mim".
                    </TextPrimary>

                </View>
            </ScrollView>
        </View>
    );
}

