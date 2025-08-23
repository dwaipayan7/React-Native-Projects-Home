import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../navigation/AppNavigation'

interface HomeScreenProps {
    navigation: NativeStackNavigationProp<RootStackParamsList, 'HomePage'>;
}

interface User {
    name: string,
    age: number,
    email: string
}

interface Items {
    title: string,
    price: number,
    id: string
}

const HomePage = ({ navigation }: HomeScreenProps) => {

    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('')
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [user, setUser] = useState<User>({ name: '', age: 0, email: '' })
    const [items, setItems] = useState<Items[]>([])
    const [details, setDetails] = useState<null>(null)

    const ref = useRef<TextInput>(null)

    return (
        <View style={styles.container}>
            <Text>HomePage</Text>
            {/* <View>
                <Button title='Profile Page' onPress={() => navigation.navigate('ProfilePage', {
                    name: "Dwaipayan",
                    email: 'abc@gmail.com'
                })} />
            </View> */}

            <TextInput 
             ref={ref}

            />    

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