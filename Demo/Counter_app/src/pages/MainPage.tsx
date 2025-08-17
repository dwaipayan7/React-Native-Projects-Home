import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Screens } from '../types/navigationTypes'
import { useSuspenseQuery } from '@tanstack/react-query'
import createTodoQueryOptions from '../components/queryOptions/todoQueryOptions'
import { ScrollView } from 'react-native-gesture-handler'
import { Todo } from '../types/todoTypes'
import { SafeAreaView } from 'react-native-safe-area-context'

type MainPageNavProp = NativeStackNavigationProp<Screens, 'MainPage'>

const MainPage = () => {

    const { data, isRefetching, refetch } = useSuspenseQuery(createTodoQueryOptions())

    if (isRefetching) {
        <View style = {styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'blue'} />
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView contentContainerStyle = {styles.scrollContainer}>
                {data?.map((todo: any) => (
                    <View style = {styles.card} key={}>

                    </View>
                ))}
            </ScrollView> */}

            <FlatList<Todo>
                data={data}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>

                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text>Status: {item.completed ? '✅ Done' : '❌ Pending'} </Text>

                    </View>

                  
                )}
                
                refreshControl={
                    <RefreshControl refreshing = {isRefetching} onRefresh={refetch} />
                }

            />
        </SafeAreaView>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        paddingBottom: 16
    },
    card: {
        borderRadius: 12,
        padding: 15,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6
    }
})