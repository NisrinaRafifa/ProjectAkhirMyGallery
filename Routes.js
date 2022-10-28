import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/login';
import HomeGallery from './pages/homegallery';
import Upload from './pages/upload';
import DetailImage from './pages/detailimage';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Login'  screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='HomeGallery' component={HomeGallery}/>
            <Stack.Screen name='Upload' component={Upload}/>
            <Stack.Screen name='DetilImage' component={DetailImage}/>
        
        </Stack.Navigator>
        
    );
}

export default Routes;