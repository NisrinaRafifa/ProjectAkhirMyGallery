import {View, Text, ActivityIndicator} from 'react-native';
import React, { useContext, Component } from 'react';

import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/login";
import HomeGallery from "./pages/homegallery";
import DetailImage from './pages/detailimage';
import Upload from './pages/upload';
import { AuthContext } from './context/AuthContext';
import Routes from './Routes';


const Stack = createNativeStackNavigator();
function AppNav () {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName ='HomeGallery'
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="HomeGallery" component={HomeGallery}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

function Coba () {
  return(
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );}



export default Coba;