import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import BigButton from "./components/BigButton";


import { ScrollView } from "react-native-gesture-handler";
import InputText from "./components/InputText";
import InputTextNew from "./components/InputTextNew";


export default class Dashboard extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>
                    <Image resizeMode={'stretch'} style={{ width: 100, height: 100, borderRadius: 100, margin: 30 }} source={require('../assets/images/logo.jpg')} />
                    <View style={{ padding: 10, flexDirection: 'column', justifyContent: 'center', }}>
                        <Text style={{ alignSelf: 'center', fontSize: 35, fontWeight: 'bold' }}>Welcome !</Text>
                        <Text style={{ alignSelf: 'center', color: '#b2beb5', fontSize: 19 }}>Login to Continue</Text>
                    </View>


                    <InputTextNew
                        title=''
                        placeholder='Enter Your Mobile Number'
                    />

                    <View style={{ padding: 15 }} />

                    <BigButton
                        title='Continue'
                    />
                    <View style={{ flexDirection: "column", margin: 50 }}>
                        {/* <View style={{ flexDirection: "row", justifyContent: 'center' }}> */}
                        <Text style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            borderWidth: 3,
                            borderStyle: 'dotted',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            alignSelf: 'center',
                            color: '#FF1493',
                            borderColor: '#FF1493'
                        }}>OR</Text>
                        {/* </View> */}
                        <View style={{ flexDirection: "row" }}>
                            <Feather style={{ padding: 15, borderRadius: 100, backgroundColor: 'white', elevation: 5 }} name="facebook" size={45} color={'#FF1493'} />
                            <View style={{ width: '20%' }} ></View>
                            <FontAwesome style={{ padding: 15, borderRadius: 100, backgroundColor: 'white', elevation: 5 }} name="google" size={45} color={'#FF1493'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white'

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
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 10,
        alignSelf: 'flex-start',
    },
    subitemName: {
        fontSize: 20,
        color: '#777474',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
    },
});
