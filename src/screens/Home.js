import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Picker
} from 'react-native';

const botaoPressionado = (ponto) => {
    Alert.alert('Marcando Ponto...'+ponto);
};


const estilo = StyleSheet.create({
    botao: {
        backgroundColor: "#e88585",
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    principal: {
        backgroundColor: '#91b8da',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});



export default class Home extends Component {
    state = {user: ''};
    render() {
        return (
          <View style={estilo.principal}>
                <View>
                    <TouchableOpacity onPress={botaoPressionado.bind('1')} style={estilo.botao}>
                        <Text>Gravar Ponto</Text>
                    </TouchableOpacity>

                    <Picker selectedValue = {this.state.user}>
                        <Picker.Item label = "Entrada"          value = "1" />
                        <Picker.Item label = "Almoço Entrada"   value = "2" />
                        <Picker.Item label = "Almoço Saída"     value = "3" />
                        <Picker.Item label = "Sair"             value = "4" />
                    </Picker>
                </View>
          </View>
        )
    }
}
