import React, {Component, useState, useEffect, useContext} from "react";
import {View,  StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import Input from '../components/input';
import Buttonn from '../components/button';
import Header from '../components/header';
import { AuthContext } from "../context/AuthContext";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login =({navigation}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleGoTo = (screen) => { 
    navigation.navigate(screen);
    };
 
  return (
    <ScrollView>
        <View style={{flex:1}}>
            <Header text='Login'></Header>
            <View  style={{flex:2, justifyContent:'center', alignItems:'center', marginTop:1, backgroundColor:'white'}}>
                <Image source={require('../src/images/lgo1.jpg')} style={{height:300, width:300}}>
                </Image>
            </View>
            <View style={{flex:3, backgroundColor:'#b8e0d2'}}>
               <View>
                    <TextInput value={email} style={{
                    backgroundColor:'white', 
                    marginHorizontal:20, 
                    marginTop:20, 
                    borderRadius:20, 
                    paddingVertical:13,
                    paddingLeft:20,
                    elevation:2,                  
                }} 
                    placeholder='Masukan Email'
                    onChangeText={setEmail}>
                    </TextInput>
               </View>
               <View>
                    <TextInput value={pass} style={{
                    backgroundColor:'white', 
                    marginHorizontal:20, 
                    marginTop:20, 
                    borderRadius:20, 
                    paddingVertical:13,
                    paddingLeft:20,
                    elevation:2,                  
                }} 
                    placeholder='Masukan Password'
                    onChangeText={setPass}>
                    </TextInput>
               </View>


            <View style={{flex:4, justifyContent:'center', marginTop:30, marginHorizontal:20, paddingBottom:100}}>
                <Button
                    title='Login'
                    color={'#76a092'}
                    onPress={() => handleGoTo('HomeGallery')}>
                </Button>
            </View>
                
            </View>
        </View>
    </ScrollView>
    );
}



export default Login;