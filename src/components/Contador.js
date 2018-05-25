import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableHighlight, Vibration } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 10000,
            timerReset: false,
            stopwatchReset: false,
            showAlert: false,
            alertText: 'Horário'
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
        this.setState({timerStart: !this.state.timerStart, timerReset: false});
    }

    resetTimer() {
        this.setState({timerStart: false, timerReset: true});
    }

    toggleStopwatch() {
        this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }

    resetStopwatch() {
        this.setState({stopwatchStart: false, stopwatchReset: true});
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    hideAlert = () => {
        if(this.state.showAlert === true){
            this.setState({showAlert: false});
            this.setState({timerStart: false, timerReset: true});
            Vibration.cancel();
        }
    };

    handleTimerComplete = () => {
        if(this.state.showAlert === false){
            this.setState({showAlert: true});
            Vibration.vibrate(PATTERN, true);
        }
    };

    render() {
        return (
            <View>
                <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
                       reset={this.state.timerReset}
                       options={options}
                       handleFinish={this.handleTimerComplete}
                       getTime={this.getFormattedTime} />
                <TouchableHighlight onPress={this.toggleTimer}>
                    <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.resetTimer}>
                    <Text style={{fontSize: 30}}>Reset</Text>
                </TouchableHighlight>

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
        );
    }
}

const PATTERN = [1000, 1000, 1000];

const options = {
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 220,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};
