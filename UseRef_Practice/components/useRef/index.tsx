import React, { useRef } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const UseRef = () => {
  const nameRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmit = () => {
    console.log('Entered name:', nameRef.current)
    console.log('Entered password:', passwordRef.current)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useRef Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => (nameRef.current = text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => (passwordRef.current = text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default UseRef

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
})