import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,

} from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BigButton from "./components/BigButton";

import { ScrollView } from "react-native-gesture-handler";
import PickUpBtn from "./components/PkTypBtn";
import DropDownPicker from 'react-native-dropdown-picker';



export default class Dashboard extends Component {

    state = {
        date: new Date(),
    }

    render() {


        const items = [
            { name: 'Car Cleaner', nmber: 'SP KS-3567', img: require('../assets/images/addOn3.png') },
            { name: 'Air Freshner', nmber: 'SP KS-2567', img: require('../assets/images/addOn1.png') },
            { name: 'Tire Cleaner', nmber: 'SP KS-4567', img: require('../assets/images/addOn2.png') },
            { name: 'Cleaners', nmber: 'SP KS-4567', img: require('../assets/images/addOn1.png') },
            { name: 'Air Freshners', nmber: 'SP KS-4567', img: require('../assets/images/addOn2.png') },

        ];
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container}>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons style={{ padding: 5 }} name="chevron-back" size={28} color={'#FF1493'} />
                        <Text style={{ fontSize: 20, paddingTop: 5, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                        <View ><Text style={{ fontSize: 20, padding: 5 }}>Rs 75000</Text></View>

                    </View>

                    <View style={{ width: '100%', flex: 1, paddingLeft: 38, flexDirection: 'column', borderBottomWidth: 1.5 }}>
                        <Text style={{ fontSize: 15 }}>Service Time : 4 Days</Text>
                        <Text style={{ fontSize: 10, paddingBottom: 5 }}>1 vehicle added</Text>

                    </View>
                    <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                        <PickUpBtn
                            title='Pickup'
                            customStyle={{}}
                        />
                        <PickUpBtn
                            title='Reserve'
                        />
                        <PickUpBtn
                            title='Shedule'
                        />

                    </View>
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                        <View style={{ flexDirection: 'row', alignSelf: "center" }}>
                            <PickUpBtn
                                title='weekly'
                                customStyle={{ height: 35, }}
                            />
                            <PickUpBtn
                                title='monthly'
                                customStyle={{ height: 35 }}
                            />
                            <PickUpBtn
                                title='seasonally'
                                customStyle={{ height: 35 }}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <PickUpBtn
                                title='Date'
                                customStyle={{ height: 35, margin: 25 }}
                            />
                            <View style={{ width: 50 }}></View>
                            <PickUpBtn
                                title='Time'
                                customStyle={{ height: 35, margin: 25 }}
                            />
                        </View>

                    </View>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 15, paddingTop: 20, fontWeight: 'bold' }}>Nano Ceramic Coating</Text>
                        <View style={{ padding: 10 }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Item 1', value: 'item1' },
                                    { label: 'Item 2', value: 'item2' },
                                ]}
                                defaultIndex={0}
                                containerStyle={{ height: 40 }}
                                onChangeItem={item => console.log(item.label, item.value)}
                            />
                        </View>

                    </View>
                    <View>
                        <View style={{ height: 170 }}>
                            <FlatGrid
                                itemDimension={200}
                                data={items}
                                style={styles.gridView}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Image source={item.img} resizeMode={'stretch'}
                                            style={{ width: 100, height: 80 }} />
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <Text style={styles.itemNumber}>{item.nmber}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>

                    <BigButton style={{}}
                        title='Verify & Continue'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white'

    },
});
