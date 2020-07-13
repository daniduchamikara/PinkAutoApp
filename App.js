import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from "./src/screens/Dashboard";
import splash from "./src/screens/Splash";
import selectVehicle from "./src/screens/SelectVehicle";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="splash">

          <Stack.Screen name="splash" component={splash} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="selectVehicle" component={selectVehicle} options={{ headerShown: true }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

