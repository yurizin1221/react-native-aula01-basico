import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhe() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.textoTitulo}> Biografia do Neymar </Text>
            <Text style={estiloDetalhe.textoComeco}>Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de 1992),
            mais conhecido como Neymar ou Neymar Jr., é um futebolista brasileiro que atua como ponta-esquerda ou meia-atacante.
            Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro
             da atualidade e um dos melhores futebolistas do mundo.</Text>

            <Text style={estiloDetalhe.textoSegundo}> Revelado pelo Santos em 2009, Neymar ganhou diversos títulos com o clube, incluindo
             dois Campeonatos Paulistas seguidos, uma Copa do Brasil e uma Libertadores; com esse último sendo o primeiro do Santos
             desde 1963. Ele ganhou por duas vezes seguidas o prêmio de melhor jogador sul-americano do ano, em 2011 e 2012, e um
             prêmio Puskás, de gol mais bonito do ano, em 2011. Em 2013, foi vendido ao Barcelona, após ser protagonista da conquista
             da Copa das Confederações de 2013 pela Seleção Brasileira. Considerada a venda mais cara da história do futebol
             brasileiro, Neymar, na sua segunda temporada pelo clube espanhol, estrelando um trio de ataque ao lado de Lionel Messi
             e Luis Suárez, conquistou a tríplice coroa de La Liga, Copa del Rey e Liga dos Campeões da UEFA, terminando como um dos
            artilheiros da última e se consagrando como um dos melhores futebolistas do mundo, sendo finalista da Bola de Ouro da
             FIFA por suas atuações no mesmo ano. Em 2017, se tornou a transferência mais cara da história do futebol, com sua
            venda milionária ao Paris Saint-Germain por 222 milhões de euros. Nesse mesmo ano, foi pela segunda vez na carreira
            um dos três finalistas da premiação da FIFA de melhor jogador do mundo, desta vez nomeada The Best FIFA Football
            Awards. Na sua terceira temporada em Paris, Neymar ajudou o PSG a chegar em sua primeira final de Liga dos Campeões,
            na qual eles perderam por 1–0. Neymar é o jogador brasileiro com mais com gols por esta competição desde 2018, quando
            superou Kaká.</Text>
                
            <Text style={estiloDetalhe.textoTerceiro}>Pela Seleção Brasileira, Neymar estreou com 18 anos e atualmente é o camisa 10,
            principal jogador e o segundo maior artilheiro da história da Seleção, ficando atrás apenas de Pelé. Disputou a Copa
            do Mundo FIFA de 2014, onde marcou 4 gols em 5 partidas, mas sofreu uma grave lesão na coluna durante as quartas-de
            -finais contra a Colômbia, o que o afastou da competição. No ano anterior havia conquistado o título da Copa das
            Confederações, sendo a principal estrela brasileira durante os cinco jogos da campanha, onde fez 4 gols e deu 3
            assistências, tendo, inclusive, levado o prêmio de melhor jogador da competição e ainda a Chuteira de Bronze.
            Participou da Copa do Mundo de 2018, marcou dois gols, mas foi eliminado nas quartas-de-finais. Também disputou
            três edições da Copa América, em 2011, 2015 e 2021, sem conseguir passar das quartas-de-finais nas duas primeiras
            oportunidades e perdendo o título para a Argentina no último. Em 2016, fez parte do elenco que ganhou o primeiro
            título olímpico da história da Canarinho, marcando o pênalti que deu o título e saindo como herói. </Text>
             <Text style={estiloDetalhe.textoQuarto}>Você deseja voltar para a tela inicial? Aperte no botão abaixo!</Text>

<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhe;