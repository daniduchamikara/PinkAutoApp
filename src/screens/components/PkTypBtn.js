import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";

class PkTypBtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonColor: 'red',
        }
    }

    render() {
        return (
            <View >
                <TouchableOpacity style={[{
                    height: 65,
                    width: 100,
                    flex: 1,
                    margin: 5,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    underlayColor: 'black',
                    borderRadius: 10,
                    backgroundColor: 'white',
                    elevation: 5
                }, this.props.customStyle]}>
                    <Text style={[styles.buttonName]}>{this.props.title}</Text>

                </TouchableOpacity>


            </View>
        );
    }
}
export default PkTypBtn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});