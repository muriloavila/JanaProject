import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';

const botaoPressionado = () => {
    Alert.alert('Marcando Ponto...');
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
    }
});



export default class Home extends Component {
  render() {
    return (
      <View style={estilo.principal}>
            <View>
                <TouchableOpacity onPress={botaoPressionado} style={estilo.botao}>
                    <Text>Gravar Ponto</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
  }
}
