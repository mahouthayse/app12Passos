
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo4 from "../../../assets/passo4.png";
import NavBar from "../../../Components/NavBar";

export default function Step4() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 4"/>
        <ScrollView>

            <Image source={Passo4} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

            <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 4</TitleManuscript>
                <TitlePrimary>
                    Fizemos minucioso e destemido inventário moral de nós mesmos.
                </TitlePrimary>
                <TextPrimary>
                    A Criação nos deu os instintos por alguma razão. Sem eles não seríamos seres humanos completos. Se
                    os homens e as mulheres não se esforçassem a fim de se sentir seguros, a fim de conseguir alimento
                    ou construir abrigo, não sobreviveriam; se não se reproduzissem, a Terra não seria povoada; se não
                    existisse o instinto social, se os homens não se interessassem pelo convívio com seus semelhantes,
                    não haveria sociedade. Portanto, estes desejos - pela relação sexual, pela segurança material e
                    emocional, e pelo companheirismo - são perfeitamente necessários e naturais, e certamente dados a
                    nós por Deus.
                </TextPrimary>
                <TextPrimary>
                    Contudo, estes instintos, tão necessários para nossa existência, frequentemente excedem bastante
                    suas funções específicas. Fortemente, cegamente e muitas vezes simultaneamente, eles nos impulsionam,
                    dominam e insistem em dirigir nossas vidas.
                </TextPrimary>
                <TextPrimary>
                    Nossos anseios pelo sexo, pela segurança material e emocional, e por posição importante na sociedade,
                    com frequência nos tiranizam.
                    Quando deturpados desta forma, os desejos naturais do homem causam-lhe grandes problemas, aliás,
                    quase todos os problemas que existem. Nenhum ser humano, por melhor que seja, fica livre dessas
                    dificuldades. Quase todo problema emocional grave pode ser considerado como um caso de instintos
                    deturpados. Quando isso acontece, nossas grandes qualidades naturais, os instintos, tornam-se
                    empecilhos físicos e mentais.
                </TextPrimary>
                <TextPrimary>
                    O Quarto Passo representa nosso esforço enérgico e meticuloso para descobrir quais foram, e são,
                    esses obstáculos em cada um de nós. Queremos descobrir exatamente como, quando e onde nossos desejos
                    naturais nos deformaram. Queremos olhar de frente a infelicidade que isto causou aos outros e a nós mesmos.
                </TextPrimary>

                <TextPrimary>
                    Descobrindo quais são nossas deformidades emocionais, podemos começar a corrigi-las. Sem um esforço
                    voluntário e persistente para lograr isso, haverá pouca sobriedade e felicidade para nós. Sem um
                    minucioso e destemido inventário moral, a maioria de nós verificou que a fé que realmente funciona
                    na vida diária permanece fora de alcance.
                </TextPrimary>
            </View>
        </ScrollView>
        </View>
    );
}

