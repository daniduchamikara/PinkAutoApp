import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

import Icon from 'react-native-vector-icons/Feather'


const InputTextNew = ({ title, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={{ margin: 5, fontSize: 20 }}>{title}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1.5,
                borderRadius: 6,
                borderColor: '#FF1493',
                padding: 5

            }}>
                <Icon name="phone-call" size={25} color={'#FF1493'} />
                <TextInput
                    style={{ padding: 10 }}
                    placeholder={placeholder}
                    placeholderTextColor={'#FF1493'}
                />
            </View>

        </View>
    );
}
export default InputTextNew;


const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});