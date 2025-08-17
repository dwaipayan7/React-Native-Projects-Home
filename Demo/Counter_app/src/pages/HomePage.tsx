import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../types/navigationTypes';

type HomePageNavProp = NativeStackNavigationProp<Screens, 'HomePage'>;

const HomePage = () => {

    const navigation = useNavigation<HomePageNavProp>();

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        if (count !== 0) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 15 }}>
                <Text style={styles.title}>Counter App</Text>
            </View>

            <Text style={styles.count}>{count}</Text>
            <View style={{ gap: 12 }}>
                <Button title='Increment' onPress={increment} />
                <Button title='Decrement' onPress={decrement} />
                <Button title='Main Page' onPress={() => navigation.navigate('MainPage')} />

            </View>

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0e3e3ff'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    count: {
        fontWeight: '800',
        fontSize: 18,
        marginBottom: 12
    }
})