
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import UseRef from './components/useRef';
import UseCallbackExample from './components/useCallback';

function App() {


  return (
    <View style={styles.container}>
      {/* <UseRef/> */}
      <UseCallbackExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
