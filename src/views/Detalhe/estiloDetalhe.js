import { StyleSheet } from 'react-native';

const estiloDetalhe = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#708090',
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },

    textoTitulo: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    textoComeco: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textoSegundo: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textoTerceiro: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "justify",
    },
    textoQuarto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "center",
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#000000',
        fontWeight:'bold'
    },
});
export default estiloDetalhe;