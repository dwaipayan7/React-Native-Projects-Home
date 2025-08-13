import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContext';

const ThemedPage = () => {

    const {theme, toggleTheme, themeStyles} = useContext(ThemeContext);

  return (
    <View style = {[styles.container, {backgroundColor: themeStyles[theme].backgroundColor }]}>
      <Text style = {[styles.text, {color: themeStyles[theme].color }]}>{theme.toUpperCase()}</Text>

<Button title='Toggle Theme' onPress={toggleTheme} />

    </View>
  )
}

export default ThemedPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        marginBottom: 20
    }
})