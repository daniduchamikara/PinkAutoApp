import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from "./src/screens/Dashboard";
import splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import OTP from "./src/screens/OTPVerification";
import Pickup from "./src/screens/Pickup";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Pickup">

          <Stack.Screen name="splash" component={splash} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
          <Stack.Screen name="Pickup" component={Pickup} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

