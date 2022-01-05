
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo5 from "../../../assets/passo5.png";
import NavBar from "../../../Components/NavBar";

export default function Step5() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 5" url="Passos"/>
        <ScrollView >

            <Image source={Passo5} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

            <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 5</TitleManuscript>
                <TitlePrimary>
                    Admitimos perante Deus, perante nós mesmos e perante outro ser humano, a natureza exata de nossas falhas.
                </TitlePrimary>
                <TextPrimary>
                    Todos os Doze Passos de A.A. pedem-nos para atuar em sentido contrário aos nossos desejos naturais,
                    todos desinflam nosso ego. Quando se trata de desinflar o ego, poucos passos são mais duros de aceitar
                    que o Quinto. Mas, dificilmente, algum deles é mais necessário à obtenção da sobriedade prolongada
                    e à paz de espírito do que este.
                </TextPrimary>
                <TextPrimary>
                    A experiência de A.A. indicou-nos que não podemos viver sozinhos com insistentes problemas e os
                    defeitos de caráter que os causam e agravam. Caso tenhamos passado o holofote do Quarto Passo sobre
                    nossas vidas, e se ele tiver realçado aquelas experiências que preferimos não lembrar, se chegamos
                    a aprender como os pensamentos e as ações erradas feriram a nós e a outrem, então, toma-se mais
                    imperativo do que nunca desistir de viver sozinhos com esses fantasmas torturantes de ontem. É
                    preciso falar com alguém a esse respeito.
                </TextPrimary>
                <TextPrimary>
                    Tão intensos, porém, são nosso medo e a relutância em fazê-lo que, no início, muitos AAs tentam
                    contornar o Quinto Passo. Procuramos uma maneira mais fácil - que geralmente consiste na admissão
                    ampla e quase indolor de que, quando bebíamos, éramos, às vezes, maus elementos. Então, para
                    completar, acrescentamos descrições dramáticas desse lado de nosso comportamento quando bêbados
                    que, em todo caso, nossos amigos provavelmente já conhecem.
                </TextPrimary>
                <TextPrimary>
                    Mas, das coisas que realmente nos aborrecem e marcam, nada dizemos. Certas lembranças angustiantes
                    ou humilhantes, dizemos para nós mesmos, não devem ser compartilhadas com ninguém. Essas serão nosso
                    segredo. Ninguém deve saber. Esperamos levá-las conosco para a sepultura.
                </TextPrimary>

                <TextPrimary>
                    Contudo, se a experiência de A.A. serve para algo, ela nos diz que, a esse procedimento, não só
                    falta critério, como também é uma resolução perigosa. Poucas atitudes atrapalhadas causaram mais
                    problemas do que recusar-se à prática do Quinto Passo. Algumas pessoas são incapazes de permanecer
                    sóbrias, outras recairão periodicamente enquanto não fizerem uma verdadeira "limpeza de casa".
                </TextPrimary>
            </View>
        </ScrollView>
        </View>
    );
}

