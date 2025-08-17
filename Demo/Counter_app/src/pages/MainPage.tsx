import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Screens } from '../types/navigationTypes'
import { useSuspenseQuery } from '@tanstack/react-query'
import createTodoQueryOptions from '../components/queryOptions/todoQueryOptions'
import { Todo } from '../types/todoTypes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

type MainPageNavProp = NativeStackNavigationProp<Screens, 'MainPage'>

const MainPage = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode)

  const { data, isRefetching, refetch } = useSuspenseQuery(createTodoQueryOptions())

  if (isRefetching) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#f0f0f0" }]}>
      <FlatList<Todo>
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: darkMode ? "#1e1e1e" : "#ffffff" }]}>
            <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>
              {item.title}
            </Text>
            <Text style={{ color: darkMode ? "#bbb" : "#333" }}>
              Status: {item.completed ? '✅ Done' : '❌ Pending'}
            </Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
    </SafeAreaView>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
})
