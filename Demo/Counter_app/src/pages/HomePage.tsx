import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../types/navigationTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../components/queryOptions/redux/store/store';
import { RootState } from '@reduxjs/toolkit/query';
import { toggleTheme } from '../components/queryOptions/redux/slices/theme';

type HomePageNavProp = NativeStackNavigationProp<Screens, 'HomePage'>;

//{navigation}
const HomePage = () => {

    const dispatch = useDispatch<AppDispatch>();

    const darkMode = useSelector((state : any) => state.theme.darkMode);

    // const navigation = useNavigation<HomePageNavProp>();
    const navigation = useNavigation<HomePageNavProp>();

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        if (count !== 0) {
            setCount(prev => prev - 1);
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#f0f0f0" }]}>
            <View style={{ marginBottom: 15 }}>
                <Text style={[styles.title, { color: darkMode ? "#fff" : "#000", fontSize: 20 }]}>Counter App</Text>
            </View>

            <Text style={[styles.count, { color: darkMode ? "#fff" : "#000", fontSize: 20 }]}>{count}</Text>
            <View style={{ gap: 12 }}>
                <Button title='Increment' onPress={increment} />
                <Button title='Decrement' onPress={decrement} />
                <Button title='Main Page' onPress={() => {
                    console.log(navigation.navigate('MainPage'));
                    // navigation.navigate('MainPage')
                    navigation.navigate('MainPage')
                    
                } } />
                <Button title='Mode' onPress={() => dispatch(toggleTheme())} />

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