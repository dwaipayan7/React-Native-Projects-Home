import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../pages/MainPage';
import HomePage from '../pages/HomePage';
import { Screens } from '../types/navigationTypes';


const AppNavigation = () => {

    const Stack = createNativeStackNavigator<Screens>();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='MainPage' component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

