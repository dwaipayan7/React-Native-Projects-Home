import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Screens } from '../types/navigationTypes'

type MainPageNavProp = NativeStackNavigationProp<Screens, 'MainPage'>

const MainPage = () => {
    return (
        <View style={styles.container}>
            <Text>MainPage</Text>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})