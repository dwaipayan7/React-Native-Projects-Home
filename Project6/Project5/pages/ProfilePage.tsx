import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../navigation/AppNavigation'

interface ProfilePageProp {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'ProfilePage'>
}

const ProfilePage = ({ navigation }: ProfilePageProp) => {
    return (
        <View style={styles.container}>
            <Text>ProfilePage</Text>
            <Button title='HomePage' onPress={() => navigation.navigate('HomePage')} />
        </View>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})