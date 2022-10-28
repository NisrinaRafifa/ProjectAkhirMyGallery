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


function Coba () {
  return(
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );}



export default Coba;
