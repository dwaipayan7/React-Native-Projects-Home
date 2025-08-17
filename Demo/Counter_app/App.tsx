
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage';
import AppNavigation from './src/navigation/AppNavigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {


 

  return (
   <QueryClientProvider client={queryClient} >
     <View style = {styles.container}>
      <AppNavigation/>

    </View>
   </QueryClientProvider>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e3e3ff'
  },
});

export default App;
