import React, {Component, useState, useEffect} from "react";
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';


const Buttonn = (props, onPress) => {
    return (
    <View>
        <TouchableOpacity style=
            {{
                backgroundColor:'#76a092', 
                paddingVertical:18, 
                marginTop:20, 
                marginHorizontal:20, 
                borderRadius:20, 
                marginBottom:100}} 
                onPress={onPress}
                >
            <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:18}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
);
}

export default Buttonn;