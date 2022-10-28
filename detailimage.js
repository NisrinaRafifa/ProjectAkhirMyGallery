import React, {Component, useState, useEffect} from "react";
import {
    View, 
    Text, 
    StatusBar, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    ScrollView,  
    useWindowDimensions
} from 'react-native';
import Button from '../components/button';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailImage =({navigation}, props) => {
    const window = useWindowDimensions();
    return(
        <ScrollView style={{backgroundColor:'white'}}>
        <View style={{flex:1}}>
            
        </View>
            <View style={{backgroundColor:'white', paddingVertical:20, elevation:5, flexDirection:'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeGallery')}>
                   <Icon name="arrow-left" size={24} style={{
                    marginLeft:10, 
                    justifyContent:'center',
                    paddingVertical:4,
                    marginRight:20,
                    color:'black'
                    }}
                    >
                    </Icon> 
                </TouchableOpacity>
                
                <Text style={{color:'black', fontSize:24, marginLeft:10}}>Detail</Text>
            </View>
        <View>
            <Image 
                
                style={{height:400, width:window.width}}
                source={{uri}}
                >

            </Image>
        </View>
        </ScrollView>
    )
}

export default DetailImage;