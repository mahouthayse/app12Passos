
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo10 from "../../../assets/passo10.png";
import NavBar from "../../../Components/NavBar";

export default function Step10() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 10"/>
        <ScrollView >

            <Image source={Passo10} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

            <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 10</TitleManuscript>
                <TitlePrimary>
                    Continuamos fazendo o inventário pessoal e quando estávamos errados, nós o admitíamos prontamente.
                </TitlePrimary>
                <TextPrimary>
                    Na medida em que trabalhamos os primeiros nove passos, estamos nos preparando para a aventura de
                    uma nova vida.
                </TextPrimary>
                <TextPrimary>
                    Mas, ao nos aproximarmos do Décimo Passo, começamos a nos submeter à maneira de viver de A.A., dia
                    após dia, em tempo bom ou mau.
                </TextPrimary>
                <TextPrimary>
                    Então, vem a prova decisiva: podemos permanecer sóbrios, manter nosso equilíbrio emocional e viver
                    utilmente sob quaisquer condições?
                </TextPrimary>
                <TextPrimary>
                    Uma olhada contínua sobre nossas qualidades e defeitos e o firme propósito de aprender e crescer por
                    esta forma, são necessidades para nós. Nós alcoólicos aprendemos isso de maneira difícil. Em todos
                    os tempos e lugares, pessoas mais experientes, é claro, submeteram-se à crítica e ao autoexame
                    rigorosos. Os sábios sempre souberam que alguém só consegue fazer alguma coisa de sua vida depois
                    que o exame de si mesmo venha a se tornar um hábito regular, admita e aceite o que encontre e,
                    então, tente corrigir o que lhe pareça errado, com paciência e perseverança.
                </TextPrimary>

                <TextPrimary>
                    Um bêbado não pode viver bem hoje se está com uma terrível ressaca, resultante do excesso de bebidas
                    ontem ingerido. Porém, existe outro tipo de ressaca que todos experimentamos, bebendo ou não. É a
                    ressaca emocional, fruto direto do acúmulo de emoções negativas sofridas ontem e, às vezes, hoje -
                    o rancor, o medo, o ciúme e outras semelhantes. Se queremos viver serenamente hoje e amanhã, sem
                    dúvida temos que eliminar estas ressacas. Isto não quer dizer que devamos perambular morbidamente
                    pelo passado. Requer, isto sim, a admissão e correção dos erros agora. No inventário podemos pôr em
                    ordem o nosso passado. Feito isso, nos tornamos de fato capazes de deixá-lo para trás. Se nosso
                    balanço é feito com cuidado e se tivermos obtido paz conosco mesmos, segue-se a convicção de que os
                    desafios do amanhã poderão ser encarados à medida em que se apresentem.
                </TextPrimary>
                <TextPrimary>
                    Embora todos os inventários, em princípio, sejam iguais, a ocasião os faz diferentes. Há o
                    "relâmpago", feito a qualquer hora, toda vez em que nos encontremos enredados. Existe o do fim de
                    cada jornada, quando revisamos os acontecimentos das últimas vinte e quatro horas. É neste verdadeiro
                    balancete diário que creditamos a nosso favor ou debitamos contra nós as coisas que julgamos bem ou
                    mal feitas. De tempo em tempo, surgem as ocasiões em que, sozinhos ou assessorados pelos nossos
                    padrinhos ou conselheiros espirituais, fazemos a revisão atenta de nosso progresso durante a última
                    etapa. Muitos AAs costumam fazer uma "limpeza geral" a cada ano ou período de seis meses. Outros de
                    nós também preferem a experiência de um retiro, onde isolados do mundo exterior, calma e
                    tranquilamente, por um ou dois dias, podem proceder à auto revisão e à meditação sobre os resultados.
                </TextPrimary>

            </View>
        </ScrollView>
        </View>
    );
}

