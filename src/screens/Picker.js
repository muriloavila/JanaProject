import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
        state = {user: ''}
        updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                    <Picker.Item label = "Entrada"          value = "1" />
                    <Picker.Item label = "Almoço Entrada"   value = "2" />
                    <Picker.Item label = "Almoço Saída"     value = "3" />
                    <Picker.Item label = "Sair"             value = "4" />
                </Picker>
                <Text style = {styles.text}>{this.state.user}</Text>
            </View>
        )
    }
}

export default PickerExample;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
});