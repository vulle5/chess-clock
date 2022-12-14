import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Index from './src/Index';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Index />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
});
