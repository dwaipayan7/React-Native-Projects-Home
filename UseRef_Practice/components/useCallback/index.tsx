import { ActivityIndicator, StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'


type Post = {
  id: number,
  title: string,
  body: string
}


const UseCallbackExample: React.FC = () => {

  const [data, setData] = useState<Post[]>([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //stable function
  const fetchData = useCallback(async () => {
    try {

      setloading(true);
      setError(null);

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data: Post[] = await response.json();
      console.log(data);
      
      setData(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);


  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }


  return (
    <View style={styles.container}>
      {/* <Text>UseCallbackExample</Text> */}

      <Button title='Reload' onPress={fetchData} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.item}>{item.id}.   {item.title}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default UseCallbackExample

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 12
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
})