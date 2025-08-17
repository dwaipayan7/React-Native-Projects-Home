
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage';
import AppNavigation from './src/navigation/AppNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './src/components/queryOptions/redux/store/store';


const queryClient = new QueryClient();

function App() {




  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        <View style={styles.container}>
          <AppNavigation />
        </View>
      </QueryClientProvider>
    </Provider>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e3e3ff'
  },
});

export default App;
