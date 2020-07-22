import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class BigButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.nextBtn}>
                <Text style={{ fontSize: 20, color: 'white' }}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}
export default BigButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextBtn: {
        backgroundColor: '#000000',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});