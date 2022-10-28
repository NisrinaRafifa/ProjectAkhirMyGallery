import React, {Component, useState, useEffect} from "react";
import {
    View, 
    Text, 
    StatusBar, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    Button, 
    FlatList,
    useWindowDimensions,
} from 'react-native';
import { Item } from "react-native-paper/lib/typescript/components/List/List";

import Header from '../components/header';

const HomeGallery =({navigation}, props) => {

    const window = useWindowDimensions();
    const [data, setdata] = useState([
    {
        judul: 'play',
        capt: 'dudududududu',
        sumber: 'https://i.pinimg.com/originals/a3/6a/55/a36a55ca386b42771a40c60ebdf934a6.jpg'
    },
    {
        judul: 'basket',
        capt: 'yoayoayo',
        sumber: 'https://i.pinimg.com/originals/18/27/8d/18278d784e233ca92dee0fcaf9b69478.jpg'
    },
    {
        judul: 'glasses',
        capt: 'gelap',
        sumber: 'https://i.pinimg.com/originals/59/8d/38/598d3801e2e61a4c0bf7e92c9f97e516.jpg'
    },
    {
        judul: 'hai',
        capt: 'annyeong',
        sumber: 'https://i.pinimg.com/originals/cf/4d/f3/cf4df33ac391da615976061bbaa0cb2d.jpg'
    },
    {
        judul: 'sunbright',
        capt: 'sunbright like a diamond',
        sumber: 'https://i.pinimg.com/originals/5e/20/10/5e20108ff5f494ae029e7d8cdeb27a97.jpg'
    },
    {
        judul: 'camp',
        capt: 'camping',
        sumber: 'https://i.pinimg.com/originals/7e/31/22/7e31226eac11f8dd1b168d2423b2ec52.jpg'
    },
    {
        judul: 'baseball',
        capt: 'yolo',
        sumber: 'https://i.pinimg.com/originals/4c/c6/a4/4cc6a4ad0d978d5dc2805c97efbdd2f4.jpg'
    },
    {
        judul: 'piano',
        capt: 'na na na na',
        sumber: 'https://i.pinimg.com/originals/6c/f0/e7/6cf0e7dc9ef95cd29b11a48c059704c6.jpg'
    },
    {
        judul: 'dog',
        capt: 'dogie',
        sumber: 'https://i.pinimg.com/originals/c8/f1/28/c8f1283a5a523924c19a5a7f90b9a1a2.jpg'
    },
    {
        judul: 'play',
        capt: 'dudududududu',
        sumber: 'https://i.pinimg.com/originals/a3/6a/55/a36a55ca386b42771a40c60ebdf934a6.jpg'
    },
    {
        judul: 'basket',
        capt: 'yoayoayo',
        sumber: 'https://i.pinimg.com/originals/18/27/8d/18278d784e233ca92dee0fcaf9b69478.jpg'
    },
    {
        judul: 'glasses',
        capt: 'gelap',
        sumber: 'https://i.pinimg.com/originals/59/8d/38/598d3801e2e61a4c0bf7e92c9f97e516.jpg'
    },
])

    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <Header text='Home Gallery'></Header>
            <View  style={{flex:1}}>
                <View style={{ marginTop:20, flexDirection:'row', justifyContent:'center', backgroundColor:'white'}}>
                    <Image 
                        source={require('../src/images/Bts.jpeg')}
                            style=
                            {{
                                width:110, 
                                height:110, 
                                borderRadius:110/2
                                
                            }}
                    ></Image>
                    <View style={{marginLeft:20, flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold', fontSize:18, width:230}}>Kim_Taehyung</Text>
                        <View style={{marginTop:10}}>
                            <Button
                                title="upload"
                                color={'#76a092'}
                                onPress={() => navigation.navigate('Upload')}
                            ></Button>
                        <View style={{marginTop:10}}>
                            <Button
                                title="sign out"
                                color={'#76a092'}
                                onPress={() => navigation.navigate('Login')}
                            ></Button>
                        </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, marginTop:40}}>
                    <FlatList 
                        data={data} 
                        numColumns= {3} 
                        renderItem={({item}) => (
                        <TouchableOpacity style={{
                            marginHorizontal:1, 
                            marginBottom:1 }}
                            onPress={() => navigation.navigate('DetilImage', {uri:item.sumber})}
                            onAccessibilityAction={setdata}>
                            <Image 
                                style={{width:(window.width)/3, height:120}} 
                                source={{uri:item.sumber}}></Image>

                            </TouchableOpacity>)}
                            >
                    </FlatList>
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeGallery;