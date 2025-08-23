import { StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlipAnimation from './pages/FlipAnimation';
import AppNavigation from './navigation/AppNavigation';



function App() {
  return (

    // <SafeAreaView style={styles.container}>
    <View style = {styles.container}>
      {/* <FlipAnimation /> */}
      <AppNavigation />
    </View>
    // </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
