import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../navigation/AppNavigation'
import { useRoute } from '@react-navigation/native'

interface ProfilePageProp {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'ProfilePage'>
}

const ProfilePage = ({ navigation }: ProfilePageProp) => {

    const route = useRoute()
    console.log(route);
    
    return (
        <View style={styles.container}>
            <Text>ProfilePage</Text>
            <Button title='HomePage' onPress={() => navigation.goBack()} />
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