
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo12 from "../../../assets/passo12.png";
import NavBar from "../../../Components/NavBar";

export default function Step12() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 12"/>
            <ScrollView>
                <Image source={Passo12} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>
                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 12</TitleManuscript>
                    <TitlePrimary>
                        Tendo experimentado um despertar espiritual, graças a estes Passos, procuramos transmitir esta mensagem
                        aos alcoólicos e praticar estes princípios em todas as nossas atividades.
                    </TitlePrimary>
                    <TextPrimary>
                        A alegria de viver é o tema do Décimo Segundo Passo de A.A., e ação sua palavra chave. Neste passo,
                        saímos de nós mesmos em direção aos outros alcoólicos que ainda sofrem. Aqui, experimentamos dar sem
                        esperar recompensa. Nessa altura, estamos experimentando o dar pelo dar, isto é, nada pedindo em
                        troca. Agora começamos a praticar todos os Doze Passos em nossa vida diária para que possamos todos,
                        nós e as pessoas que nos cercam, encontrar a sobriedade emocional. Ao perceber as implicações
                        inteiras do Décimo Segundo Passo, veremos que se trata de um amor que não tem preço.
                    </TextPrimary>
                    <TextPrimary>
                        Este passo também nos diz que, como resultado da prática de todos os passos, cada um de nós foi
                        descobrindo algo que se pode chamar de "despertar espiritual". Para os AAs novos, este estado de
                        coisas pode parecer dúbio ou improvável. Eles perguntam: Que querem dizer quando falam em "despertar
                        espiritual"?
                    </TextPrimary>
                    <TextPrimary>
                        É possível que haja uma definição de despertar espiritual para cada pessoa que o tenha experimentado.
                        Contudo, os casos autênticos, na verdade, têm algo comum entre si. Essas coisas comuns entre eles
                        são de fácil compreensão. Quando um homem ou uma mulher experimenta um despertar espiritual, o
                        significado mais importante disso é que se torna capaz de fazer, sentir e acreditar em coisas que
                        antes, sem ajuda e contando com seus próprios recursos, não podia fazer. Foi-lhe concedida a dádiva
                        de um novo estado de consciência e de uma nova maneira de ser. Encontra-se num caminho que lhe
                        indica que chegará a um destino seguro, onde a vida não é um beco sem saída, nem algo que deverá ser
                        suportado ou dominado. Foi realmente transformado, porque agarrou-se a uma fonte de força de que
                        antes, de uma maneira ou de outra, havia se privado. Percebeu que possuía um grau de honestidade,
                        tolerância, dedicação, paz de espírito e amor, dos quais se supunha totalmente incapaz. O que recebeu
                        foi-lhe dado de graça; entretanto preparou-se, mesmo que minimamente, para recebê-la.
                    </TextPrimary>

                </View>
            </ScrollView>
        </View>


    );
}

