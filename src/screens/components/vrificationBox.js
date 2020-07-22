import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

class vrifyBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput maxLength={1} style={styles.verificationBox}></TextInput>
            </View>
        );
    }
}
export default vrifyBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    verificationBox: {
        borderRadius: 10,
        width: 45,
        borderWidth: 0.5,
        backgroundColor: 'white',
        elevation: 5,
        textAlign: 'center'
    }
});