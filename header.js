import React, {Component, useState, useEffect} from "react";
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
    return (
    <View>
        <View style={{backgroundColor:'white', paddingVertical:20, elevation:5}}>
            <Text style={{color:'black', fontSize:24, marginLeft:10}}>{props.text}</Text>
        </View>
    </View>
    );
}
export default Header;