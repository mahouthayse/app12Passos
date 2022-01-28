
import React from 'react';
import {TextPrimary, TitleManuscript, TitlePrimary, ViewPrimary} from "../../../Style/globalStyles";
import {ScrollView,View, Image} from "react-native";
import Passo9 from "../../../assets/passo9.png";
import NavBar from "../../../Components/NavBar";
import colors from '../../../Style/colors';

export default function Step9() {
    return (
        <View style={{flex:1}}>
            <NavBar title="Passo 9" url="Passos"/>
            <ScrollView style={{ backgroundColor: colors.white }}>

                <Image source={Passo9} style={{ width:'95%', alignSelf:'flex-start', borderTopRightRadius: 15, borderBottomRightRadius:15}}/>

                <View style={{display: 'flex', flexDirection: 'column', padding:20}}>
                    <TitleManuscript style={{alignSelf:'flex-start'}}>Passo 9</TitleManuscript>
                    <TitlePrimary>
                        Fizemos reparações diretas dos danos causados a tais pessoas, sempre que possível, salvo quando
                        fazê-las significasse prejudicá-las ou a outrem.
                    </TitlePrimary>
                    <TextPrimary>
                        Bom-senso, um cuidadoso sentido de escolha do momento, coragem e prudência - eis as qualidades que
                        precisamos ter quando damos o Nono Passo.
                    </TextPrimary>
                    <TextPrimary>
                        Após haver elaborado a relação das pessoas as quais prejudicamos, refletido bem sobre cada caso
                        específico e procurado adotar a atitude correta, veremos que as reparações diretas dos danos
                        causados dividem em várias categorias aqueles aos quais devemos nos dirigir. Haverá os que deverão
                        ter preferências, tão logo estejamos razoavelmente confiantes em poder manter nossa sobriedade.
                        Haverá aqueles aos quais poderemos fazer uma reparação apenas parcial, para que revelações completas
                        não façam a eles e a outros mais danos do que reparos. Haverá outros casos em que a ação deverá ser
                        adiada, e ainda outros em que, pela própria natureza da situação, jamais poderemos fazer um contato
                        pessoal direto.
                    </TextPrimary>
                    <TextPrimary>
                        A maioria de nós começa a fazer certos tipos de reparações diretas a partir do dia em que nos
                        tornamos membros de Alcoólicos Anônimos. Desde o momento em que dizemos às nossas famílias que
                        pretendemos verdadeiramente tentar adotar o programa, o processo se inicia. Nesta área, raramente
                        existirá o problema de escolher o momento ou ter cautela. Queremos entrar pela porta gritando as
                        boas novas. Após voltar de nossa primeira reunião ou, talvez, após haver terminado de ler o livro
                        Alcoólicos Anônimos, geralmente queremos nos sentar com algum membro da família e admitir,
                        de uma vez, os prejuízos que temos causado com nosso beber. Quase sempre queremos ir mais longe e
                        admitir outros defeitos que fizeram com que fosse difícil viver conosco. Esse será um momento bem
                        diferente e em grande contraste com aquelas manhãs de ressaca em que oscilamos entre insultar a nós
                        mesmos e culpar a família (e todos os outros) pelos nossos infortúnios. Nessa primeira sessão, basta
                        fazer uma admissão geral de nossos defeitos. Poderá ser pouco prudente, a esta altura, reviver
                        episódios angustiantes. O bom-senso sugerirá que devemos ir com calma. Embora possamos estar
                        inteiramente dispostos a revelar o pior, precisamos nos lembrar de que não podemos comprar nossa
                        paz de espírito à custa dos outros.
                    </TextPrimary>
                    <TextPrimary>
                        Porém, ao ingressar em A.A., logo encaramos essa humilhação absoluta de uma maneira bem diferente.
                        Percebemos que somente através da derrota total é que somos capazes de dar os primeiros passos em
                        direção à libertação e à força. Nossa admissão de impotência pessoal acaba por tornar-se o leito de
                        rocha firme sobre o qual poderão ser construídas vidas felizes e úteis.
                    </TextPrimary>

                    <TextPrimary>
                        O mesmo procedimento aplicar-se-á no local de trabalho. Logo pensaremos em algumas pessoas que
                        conhecem bem a nossa maneira de beber e que foram as mais afetadas pela mesma. Porém, mesmo nestes
                        casos, precisaremos usar de um pouco mais de discrição do que com nossa família. Talvez nada
                        queiramos dizer por algumas semanas ou até mais. Primeiro, desejaremos estar razoavelmente seguros
                        de que estamos firmes no programa de A.A. Então, estaremos prontos para procurar estas pessoas,
                        dizer-lhes o que é A.A. e o que estamos tentando fazer. Isso explicado, podemos admitir livremente
                        os danos que causamos e pedir desculpas. Podemos pagar ou prometer pagar, as obrigações financeiras
                        ou outras, que tivermos. A recepção generosa da maioria das pessoas perante tal sinceridade,
                        frequentemente irá nos surpreender. Até nossos mais severos e justificados críticos, com frequência
                        irão nos acolher bem na primeira tentativa.
                    </TextPrimary>
                </View>
            </ScrollView>
        </View>
    );
}

