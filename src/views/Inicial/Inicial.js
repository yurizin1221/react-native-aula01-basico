import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial() { 

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Começo</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} > 
                    <Text style={estiloInicial.botaoTexto}>Introdução</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer} >
                    <Text style={estiloInicial.botaoTexto}>Detalhe</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;