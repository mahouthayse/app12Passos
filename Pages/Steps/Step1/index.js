
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo1 from "../../../assets/passo1.png";
import NavBar from "../../../Components/NavBar";

export default function Step1() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 1"/>
        <ScrollView >

            <Image source={Passo1} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

            <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 1</TitleManuscript>
                <TitlePrimary>
                    Admitimos que éramos impotentes perante o álcool - que tínhamos  perdido o domínio sobre nossas
                    vidas
                </TitlePrimary>
                <TextPrimary>
                    Quem se dispõe a admitir a derrota completa? Quase ninguém, é claro. Todos os instintos naturais
                    gritam contra a ideia da impotência pessoal.
                </TextPrimary>
                <TextPrimary>
                    É verdadeiramente terrível admitir que, com o copo na mão, temos convertido nossas mentes numa tal
                    obsessão pelo beber destrutivo, que somente um ato da Providência pode removê-la.
                </TextPrimary>
                <TextPrimary>
                    Nenhuma outra forma de falência é igual a esta. O álcool, transformado em voraz credor, esvazia-nos
                    de toda autossuficiência e toda vontade de resistir às suas exigências. Uma vez que aceitamos este
                    fato, nossa falência como seres humanos está completa.
                </TextPrimary>
                <TextPrimary>
                    Porém, ao ingressar em A.A., logo encaramos essa humilhação absoluta de uma maneira bem diferente.
                    Percebemos que somente através da derrota total é que somos capazes de dar os primeiros passos em
                    direção à libertação e à força. Nossa admissão de impotência pessoal acaba por tornar-se o leito de
                    rocha firme sobre o qual poderão ser construídas vidas felizes e úteis.
                </TextPrimary>

                <TextPrimary>
                    Sabemos que pouca coisa de bom advirá a qualquer alcoólico que se torne membro de A.A. sem aceitar
                    sua devastadora debilidade e todas as suas consequências. Até que se humilhe desta forma, sua
                    sobriedade - se a tiver - será precária.
                </TextPrimary>
                <TextPrimary>
                    Da felicidade verdadeira, nada conhecerá. Comprovado sem sombra de dúvida por uma longa experiência,
                    este é um dos fatos de vida de A.A. O princípio de que não encontraremos qualquer força duradoura sem
                    que antes admitamos a derrota completa, é a raiz principal da qual germinou e floresceu nossa
                    Irmandade toda.
                </TextPrimary>

            </View>
        </ScrollView>
        </View>
    );
}

