
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo7 from "../../../assets/passo7.png";
import NavBar from "../../../Components/NavBar";
import colors from '../../../Style/colors';

export default function Step7() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 7" url="Passos"/>
                <ScrollView style={{ backgroundColor: colors.white }}>

                <Image source={Passo7} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 7</TitleManuscript>
                    <TitlePrimary>
                        Humildemente rogamos a Ele que nos livrasse de nossas imperfeições.
                    </TitlePrimary>
                    <TextPrimary>
                        Já que este passo trata tão especificamente da humildade, deveríamos fazer uma pausa aqui para pensar
                        sobre o que é a humildade e o que a sua prática poderá significar para nós.
                    </TextPrimary>
                    <TextPrimary>
                        Realmente, conseguir maior humildade é o princípio fundamental de cada um dos Doze Passos de A.A.,
                        pois sem um certo grau de humildade, nenhum alcoólico poderá permanecer sóbrio. Além disso, quase
                        todos os AAs descobriram que sem desenvolver esta preciosa virtude além do estritamente necessário à
                        sobriedade, não terão muita probabilidade de serem felizes. Sem ela, não podem viver uma vida de
                        muita utilidade ou, na adversidade, convocar a fé que enfrenta qualquer emergência.
                    </TextPrimary>
                    <TextPrimary>
                        A humildade, como palavra e ideal, tem passado bem mal em nosso mundo, não somente é mal entendida a
                        ideia, mas, frequentemente a palavra em si desagrada profundamente. Muitas pessoas não praticam,
                        mesmo ligeiramente, a humildade como um modo de vida. Uma boa parte da conversa cotidiana que ouvimos,
                        e muito do que lemos, salienta o orgulho que o homem tem de suas próprias realizações.
                    </TextPrimary>
                    <TextPrimary>
                        Com grande inteligência, os homens de ciência vêm forçando a natureza a revelar seus segredos. Os
                        imensos recursos que atualmente podem ser utilizados prometem tamanha quantidade de bens e confortos
                        materiais que muitos chegaram a acreditar que como obra do homem em breve chegaremos a desfrutar o
                        milênio. A pobreza desaparecerá, e haverá tanta abundância que todos, amplamente garantidos, terão
                        realizados todos os seus desejos. Em teoria parece ser assim: uma vez satisfeitos os instintos
                        primários de todos, pouca coisa restará que possa levá-los à discórdia. Então, o mundo se tornará
                        feliz e livre para concentrar-se no desenvolvimento da cultura e do caráter. Apenas com sua própria
                        inteligência e esforço, os homens terão construído seu próprio destino.
                    </TextPrimary>

                    <TextPrimary>
                        Certamente nenhum alcoólico e, sem dúvida, nenhum membro de A.A. quer condenar os avanços materiais.
                        Nem entramos em debate com muita gente que ainda se agarra com tanta paixão à crença de que satisfazer
                        os nossos desejos básicos é o objetivo principal da vida. Porém, estamos convencidos de que nenhuma
                        classe de pessoas no mundo jamais se atrapalhou tanto tentando viver segundo tal pensamento, como os
                        alcoólicos. Há milhares de anos vimos querendo mais do que a nossa parcela de segurança, prestígio
                        e romance. Quando parecíamos estar obtendo êxito, bebíamos para viver sonhos ainda maiores e quando
                        estávamos frustrados, mesmo um pouco, bebíamos até o esquecimento. Nunca havia o suficiente daquilo
                        que julgávamos querer. Em todos esses empenhos, muitos dos quais bem intencionados, ficamos
                        paralisados pela nossa falta de humildade. Havia nos faltado a perspectiva para enxergar que o
                        aperfeiçoamento do caráter e os valores espirituais deveriam vir primeiro e que as satisfações
                        materiais não constituíam o propósito da vida. De forma bem caracterizada, havíamos confundido os
                        fins com os meios. Ao invés de considerar a satisfação de nossos desejos materiais como meios pelos
                        quais podíamos viver e funcionar como humanos, entendemos que estas satisfações constituíam a única
                        finalidade e objetivo da vida. É verdade que a maioria de nós considerava desejável um bom caráter,
                        porém mais como algo de que se iria necessitar para estar satisfeito consigo mesmo.
                    </TextPrimary>
                </View>
            </ScrollView>
        </View>
    );
}

