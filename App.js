import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import Home from './src/screens/Home';

export default class appTime extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Home/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1}
});

AppRegistry.registerComponent('appTime', () => appTime);
