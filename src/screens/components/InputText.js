import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

class InputText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 250 }}>
                    <Image
                        source={require('../../assets/images/logo.jpg')}
                        style={{ width: 150, height: 150, borderRadius: 400 / 2 }}
                    />
                </View>
                <Text style={styles.itemName}>WELCOME</Text>
                <Text style={styles.subitemName}>{this.props.subName}</Text>
                <View style={styles.SectionStyle}>
                    <Image
                        source={require('../../assets/images/call.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />

                    <TextInput
                        style={this.props.style}
                        placeholder={this.props.placeholder}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        );
    }
}
export default InputText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 50

    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    subitemName: {
        fontSize: 25,
        color: '#777474',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
    },
});
