import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert, Image
} from "react-native";
import { StackActions } from '@react-navigation/native';

export default class Spash extends Component {
    componentDidMount() {
        this.timeoutHandle = setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Dashboard'));
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/splash.jpg')} resizeMode={'stretch'} style={{width:'100%', height: '100%'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
