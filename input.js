import React, {Component, useState, useEffect} from "react";
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';


const Input = (props) => {
    return (
    <View>
        <TextInput value={props.set} style={{
            backgroundColor:'white', 
            marginHorizontal:20, 
            marginTop:20, 
            borderRadius:20, 
            paddingVertical:13,
            paddingLeft:20,
            elevation:2,
            borderWidth:1,
        }} 
        placeholder={props.placeholder}
        onChangeText={text => props.set(text)}
        
        isPass={props.secureTextEntry}>
        
        </TextInput>
    </View>
);
}

export default Input;