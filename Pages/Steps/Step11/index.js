
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo11 from "../../../assets/passo11.png";
import NavBar from "../../../Components/NavBar";
import colors from '../../../Style/colors';

export default function Step11() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 11" url="Passos"/>
            <ScrollView style={{ backgroundColor: colors.white }}>

                <Image source={Passo11} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 11</TitleManuscript>

                    <TitlePrimary>
                        Procuramos, através da prece e da meditação, melhorar nosso contato consciente com Deus, na forma em
                        que O concebíamos, rogando apenas o conhecimento de Sua vontade em relação a nós, e forças para
                        realizar essa vontade.
                    </TitlePrimary>

                    <TextPrimary>
                        A oração e a meditação são nossos meios principais de contato consciente com Deus.
                    </TextPrimary>
                    <TextPrimary>
                        Nós AAs somos pessoas ativas, desfrutando a satisfação de lidar com as realidades da vida, geralmente
                        pela primeira vez em nossas vidas, tentando vigorosamente ajudar o primeiro alcoólico que aparecer.
                        Portanto, não é de se estranhar que, com frequência, tendamos a não dar importância à meditação séria
                        e à oração, tratando-as como coisas desnecessárias. Sem dúvida, chegamos a considerá-las como algo
                        que possa nos ajudar a enfrentar uma emergência, mas, a princípio, muitos dentre nós entendem-nas
                        como expressão de um dom misterioso dos religiosos, do qual podemos esperar um benefício de segunda
                        mão. Ou talvez não acreditemos em nada dessas coisas.
                    </TextPrimary>

                    <TextPrimary>
                        Para certos ingressantes e para aqueles antigos agnósticos que ainda se apegam ao grupo de A.A. como
                        seu poder superior, as afirmações sobre o poder da oração, apesar de toda a lógica e a experiência
                        que a comprovam, podem não convencer e até desagradar bastante. Aqueles entre nós que uma vez já se
                        sentiram assim, certamente podem ter por eles simpatia e compreensão. Recordamo-nos muito bem da
                        revolta que se levantava em nosso íntimo contra a ideia de ajoelhar-se perante qualquer Deus. Outros,
                        usando lógica convincente, "provavam" a não existência de Deus. E os acidentes, a doença, a
                        crueldade e a injustiça no mundo? E todas essas vidas infelizes, resultados diretos da pobreza e de
                        um conjunto de circunstâncias incontroláveis? À vista desses fatos, não poderia haver justiça e,
                        consequentemente, qualquer Deus.

                    </TextPrimary>
                    <TextPrimary>
                        Às vezes, argumentávamos de outra maneira. Está certo, nós dizíamos, a galinha provavelmente veio
                        antes do ovo. Sem dúvida o universo teve algum tipo de "origem primária"; o Deus do átomo, quem sabe,
                        transformando-se sucessivamente em frio e calor. Mas certamente não havia indicação alguma da
                        existência de um Deus que conhecia e se interessava pelos homens. Gostávamos de A.A. e não hesitávamos
                        em dizer que operava milagres. Todavia, diante da meditação e da oração, sentíamos o mesmo retraimento
                        do cientista que se recusava a realizar certa experiência por temor de ter que derrubar sua teoria
                        predileta. É claro que no fim resolvemos experimentar e, quando surgiram resultados inesperados, nós
                        vimos as coisas diferentes; de fato, entendemos de forma diferente e aceitamos totalmente a ideia de
                        meditação e oração. E isso, descobrimos, pode acontecer com qualquer pessoa que as experimente.
                        Acertou quem disse que "aqueles que zombam da oração são, quase sempre, os que não a experimentaram
                        devidamente."
                    </TextPrimary>

                </View>
            </ScrollView>
        </View>
    );
}

