import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Button } from 'react-native-elements';

import AwesomeAlert from 'react-native-awesome-alerts';

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
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: 'Gravando Ponto: Entrada',
            tipo: 1,
            showAlert: false,
            alertText: 'Ponto Gravado'
        };
    }

    onButtonPressPonto = () => {
        this.setState({isLoading: true});
        const este = this;
        
        fetch('http://18.191.54.140/ponto/now/type/'+este.state.tipo, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        }).then(function(response){
            if(response.status === 200){
                este.state.showAlert = true;
                
                switch(este.state.tipo){
                    case 1:
                        este.setState({isLoading: false, text: 'Gravando Ponto: Almoço Entrada', tipo: 2});
                    break;

                    case 2:
                        este.setState({isLoading: false, text: 'Gravando Ponto: Almoço Volta', tipo: 3});
                    break;

                    case 3:
                        este.setState({isLoading: false, text: 'Gravando Ponto: Saida', tipo: 4});
                    break;

                    case 4:
                        este.setState({isLoading: false, text: 'Gravando Ponto: Entrada', tipo: 1});
                    break;
                }
            }else{
                este.state.alertText = "Erro ao gravar Ponto";
            }
        });
    };

    hideAlert = () => {
        this.setState({
          showAlert: false
        });
    };



    render() {
        return (
          <View style={estilo.principal}>
                <Button
                    title={this.state.text}
                    loading={this.state.isLoading}
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    titleStyle={{ fontWeight: "700" }}
                    type={this.state.type}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    onPress={() => this.onButtonPressPonto(this)}
                    containerStyle={{ marginTop: 20 }}
                />
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title={this.state.alertText}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="O.K."
                    confirmButtonColor="#DD6B55"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
          </View>
        )
    }
}