import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../navigation/AppNavigation'

interface HomeScreenProps{
    navigation: NativeStackNavigationProp<RootStackParamsList, 'HomePage'>;
}

const HomePage = ({navigation}: HomeScreenProps) => {
  return (
    <View style = {styles.container}>
      <Text>HomePage</Text>
      <View>
        <Button title = 'Profile Page' onPress={() => navigation.navigate('ProfilePage')} />
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})