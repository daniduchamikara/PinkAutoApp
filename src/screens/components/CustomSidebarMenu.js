import React from 'react';

import { View, StyleSheet, Text, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = props => {
    let items = [
        {
            navOptionName: 'Home',
            screenToNavigate: 'HomeScreen',
        },
        {
            navOptionName: 'Category View',
            screenToNavigate: 'CategoryScreen',
        },
        {
            navOptionName: 'Favorites',
            screenToNavigate: 'FavoriteItemScreen',
        },
        {
            navOptionName: 'Customer Feedback',
            screenToNavigate: 'CustomerFeedbackScreen',
        },
        {
            navOptionName: 'About App',
            screenToNavigate: 'AboutAppScreen',
        },
        {
            navOptionName: 'Social Logins',
            screenToNavigate: 'SocialLoginScreen',
        },
        {
            navOptionName: 'Logout',
            screenToNavigate: 'logout',
        },
    ];

    const handleClick = (index, screenToNavigate) => {
        if (screenToNavigate == 'logout') {
            props.navigation.toggleDrawer();
            Alert.alert(
                'Logout',
                'Are you sure? You want to logout?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => {
                            return null;
                        },
                    },
                    {
                        text: 'Confirm',
                        onPress: () => {
                            AsyncStorage.clear();
                            props.navigation.navigate('Auth');
                            console.log('logout');
                        },
                    },
                ],
                { cancelable: false }
            );
        } else {
            props.navigation.toggleDrawer();
            global.currentScreenIndex = screenToNavigate;
            props.navigation.navigate(screenToNavigate);
        }
    };
    return (
        <View style={stylesSidebar.sideMenuContainer}>
            <View style={stylesSidebar.profileHeader}>
                {/* <View style={stylesSidebar.profileHeaderPicCircle}> */}
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 60 / 2,
                        // color: 'white',
                        backgroundColor: '#ffffff',
                        // textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    source={require('../../Image/eventCat.png')}
                />
                <Text style={{ fontSize: 25, color: '#307ecc' }}>
                    {'H2Apps'.charAt(0)}
                </Text>

                {/* </View> */}
                <Text style={stylesSidebar.profileHeaderText}>H2Apps</Text>

            </View>
            {/* <Text style={stylesSidebar.profileHeaderText2}>Powered by zincat Technologies</Text> */}
            <Image

                source={require('../../Image/logo.png')}
                style={{
                    marginTop: 1,
                    marginBottom: 1,
                    width: 100,
                    height: 30,
                    margin: 80,
                }}
            />
            <View style={stylesSidebar.profileHeaderLine} />
            <View style={{ width: '100%', flex: 1 }}>
                {items.map((item, key) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 20,
                            color: 'white',
                            backgroundColor:
                                global.currentScreenIndex === item.screenToNavigate
                                    ? '#4b9ff2'
                                    : '#307ecc',
                        }}
                        key={key}
                        onStartShouldSetResponder={() =>
                            handleClick(key, item.screenToNavigate)
                        }>
                        <Text style={{ fontSize: 15, color: 'white' }}>
                            {item.navOptionName}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const stylesSidebar = StyleSheet.create({
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#307ecc',
        paddingTop: 40,
        color: 'white',
    },
    profileHeader: {
        flexDirection: 'row',
        backgroundColor: '#307ecc',
        padding: 15,
        textAlign: 'center',
    },
    profileHeaderPicCircle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        // color: 'white',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileHeaderText: {
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    profileHeaderText2: {
        color: 'black',
        fontSize: 10,
        alignSelf: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold',
    },
    profileHeaderLine: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor: '#e2e2e2',
        marginTop: 15,
        marginBottom: 10,
    },
});
export default CustomSidebarMenu;
