import { StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlipAnimation from './pages/FlipAnimation';


function App() {
  return (

    <SafeAreaView style={styles.container}>
      <FlipAnimation />
    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
