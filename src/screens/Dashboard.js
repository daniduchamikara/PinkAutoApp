import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';


import { ScrollView } from "react-native-gesture-handler";

export default class Dashboard extends Component {

    render() {
        const items = [
            { name: 'BMW X1', nmber: 'SP KS-3567', img: require('../assets/images/bmw.png') },
            { name: 'Benz E200', nmber: 'SP KS-2567', img: require('../assets/images/bmw.png') },
            { name: 'Audi A4', nmber: 'SP KS-4567', img: require('../assets/images/bmw.png') },

        ];
        return (
            <View style={styles.container}>

                <View style={{ margin: 20 }}>
                    <View style={{ flexDirection: 'row',height:40 }}>
                        <Icon name='menu' size={25} color={'black'} />
                        <View style={{ flex: 1 }} />
                        <Icon name='ios-notifications' size={25} color={'black'} />
                        <View style={{ flex: 0.03 }} />
                        <Icon name='chatbubble-ellipses-outline' size={25} color={'black'} />
                    </View>

                    <Text style={[styles.title, { fontSize: 24 }]}>Good Morning!</Text>
                    <View style={{ padding: 5 }} />
                    <Text style={[styles.title, { fontSize: 14 }]}>Activity Request</Text>
                    <View style={{ padding: 10 }} />

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}}>

                        <TouchableOpacity style={styles.detailContainer}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14 }}>Vehicle Reached Center</Text>
                                <View style={{ flex: 1 }} />
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>View Details</Text>
                                <IconM name='chevron-right' size={20} color={'red'} />
                            </View>

                        </TouchableOpacity>

                        <View style={{ height: 220 }}>
                            <FlatGrid
                                itemDimension={200}
                                data={items}
                                style={styles.gridView}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Image source={item.img} resizeMode={'stretch'} style={{ width: 100, height: 80 }} />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemNumber}>{item.nmber}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>

                        <Text style={styles.title}>Select Type of car wash</Text>

                        <View style={{height:100}}/>

                        <TouchableOpacity style={styles.nextBtn}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Next</Text>
                        </TouchableOpacity>

                    </ScrollView>


                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    gridView: {
        marginTop: 10,
        flex: 1,
    },

    detailContainer: {
        width: '95%',
        height: 100,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
    },

    itemContainer: {
        backgroundColor: 'white',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        height: 180,
        width: 120,
        marginLeft: 9
    },
    itemName: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    itemNumber: {
        fontWeight: '600',
        fontSize: 12,
        color: 'gray',
    },
    nextBtn: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 16,
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    }
});