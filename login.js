import React, {Component, useState, useEffect, useContext} from "react";
import {View,  StyleSheet, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, Button, Alert} from 'react-native';
import Input from '../components/input';
import Buttonn from '../components/button';
import Header from '../components/header';
import { AuthContext } from "../context/AuthContext";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";


const Login =({navigation}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [myData, setMyData] = useState({});
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleGoTo = (screen) => { 
        navigation.navigate(screen);
    };

    const getApiData = async () => {
        if (username === '' || password === '') {
          console.error('Username or password not filled');
          return null;
        }
    
        try {
          setIsLoading(true);
          const getData = await fetch(
            'https://playgroundapi.com/bootcamp/api/web/user/login',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username,
                password,
              }),
            },
          );
          if (getData.status === 200) {
            const results = await getData.json();
            console.log(results);
            setMyData(results);
            setIsLoading(false);
            await AsyncStorage.setItem('token', results.data.token);
            navigation.navigate('HomeGallery');
          }
        } catch (e) {
          console.error(e);
        }
    
        return null;
      };
    
      useEffect(() => {
        console.log(myData);
      }, [myData]);

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
                    <TextInput value={username} style={{
                    backgroundColor:'white', 
                    marginHorizontal:20, 
                    marginTop:20, 
                    borderRadius:20, 
                    paddingVertical:13,
                    paddingLeft:20,
                    elevation:2,                  
                }} 
                    placeholder='Masukan Username'
                    onChangeText={setUsername}>
                    </TextInput>
               </View>
               <View>
                    <TextInput value={password} style={{
                    backgroundColor:'white', 
                    marginHorizontal:20, 
                    marginTop:20, 
                    borderRadius:20, 
                    paddingVertical:13,
                    paddingLeft:20,
                    elevation:2,                  
                }} 
                    placeholder='Masukan Password'
                    onChangeText={setPassword}>
                    </TextInput>
               </View>


            <View style={{flex:4, justifyContent:'center', marginTop:30, marginHorizontal:20, paddingBottom:100}}>
                <Button
                    title='Login'
                    color={'#76a092'}
                    onPress={() => getApiData()} />
                    {isLoading ? <ActivityIndicator /> : null}
            </View>
                
            </View>
        </View>
    </ScrollView>
    );
}



export default Login;