import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'

export type RootStackParamsList = {
    HomePage: undefined,
    ProfilePage: undefined
}

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomePage' component={HomePage} options={{ headerTitleAlign: 'center' }} />
                <Stack.Screen name='ProfilePage' component={ProfilePage} options={{
                    headerTitleAlign: 'center'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})