import React, {Component, useState, useEffect} from "react";
import * as react from 'react';
import {View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView, ImagePickerIOS, Button} from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from "../components/input";
import { ImagePicker, launchImageLibrary, launchCamera } from "react-native-image-picker";


const Upload =({navigation}) => {
   
    const [judul, setJudul] = useState('');
    const [desc, setDesc] = useState('');
    
    const [image, setImage] = useState('');

    const onSubmit = () => {
        alert('judul: ', judul);
        ('desc: ', desc);
    }

    handleChoosePhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log('respons', response);
        });
    };

    return(
        <ScrollView style={{backgroundColor:'white'}}>
            
            <View style={{backgroundColor:'white', paddingVertical:20, elevation:5, flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeGallery')}>
                <Icon name="arrow-left" size={24} style={{
                    marginLeft:10, 
                    justifyContent:'center',
                    paddingVertical:4,
                    marginRight:20,
                    color:'black'
                    }}>
                </Icon>
            </TouchableOpacity>
                <Text style={{color:'black', fontSize:24, marginLeft:10}}>Upload</Text>
            </View>
            <View style={{marginLeft:20, marginTop:30, marginBottom:20}}>
                <Text style={{fontSize:24, color:'black'}}>Upload your Images Here</Text>
            </View>
            <View style={{marginBottom:20}}>
            <View>
                    <TextInput value={judul} style={{
                        backgroundColor:'white', 
                        marginHorizontal:20, 
                        marginTop:20, 
                        borderRadius:20, 
                        paddingLeft:20,
                        elevation:2,
                        borderWidth:1,
                    }} 
                        placeholder='Title'
                        onChangeText={setJudul}>
                    </TextInput>
                </View>
                <View>
                    <TextInput value={desc} style={{
                        backgroundColor:'white', 
                        marginHorizontal:20, 
                        marginTop:20, 
                        borderRadius:20, 
                        height:150,
                        paddingLeft:20,
                        elevation:2,
                        borderWidth:1,
                        textAlignVertical:'top'
                    }} 
                        placeholder='description'
                        onChangeText={setDesc}>
                    </TextInput>
                </View>
                
            </View>
            <View style={{marginHorizontal:20}}>
                <TouchableOpacity>
                    <Button 
                        title='Select File'
                        color={'#76a092'}
                        onPress={()=>alert('bfksfk')}
                    ></Button>
                </TouchableOpacity>
               
            </View>
            <View style={{marginHorizontal:20, marginTop:20}}>
                <TouchableOpacity>
                    <Button 
                        title='Submit'
                        color={'#49796B'}
                        onPress={()=>alert(judul)}
                ></Button> 
                </TouchableOpacity>
                
            </View>

        </ScrollView>
    )
}

export default Upload;