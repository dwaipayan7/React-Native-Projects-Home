
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage';
import AppNavigation from './src/navigation/AppNavigation';


function App() {
 

  return (
    <View style = {styles.container}>
      <AppNavigation/>

    </View>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e3e3ff'
  },
});

export default App;
