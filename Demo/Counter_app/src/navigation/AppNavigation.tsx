import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import MainPage from '../pages/MainPage'
import HomePage from '../pages/HomePage'
import { Screens } from '../types/navigationTypes'
import { useSelector } from 'react-redux'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator<Screens>()

  const darkMode = useSelector((state: any) => state.theme.darkMode)

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: darkMode ? '#121212' : '#f0f0f0', // header background
          },
          headerTintColor: darkMode ? '#fff' : '#000', // header text/icons
          contentStyle: {
            backgroundColor: darkMode ? '#121212' : '#ffffff', // screen background
          },
        }}
      >
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: 'Todos', }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
