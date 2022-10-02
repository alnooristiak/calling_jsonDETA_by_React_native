import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Practice from './src/Components/Practice';
import HooksEffects from './src/screens/HooksEffects';

export default function App() {
  return (
    <View style={styles.container}>
      <Practice></Practice>
      <HooksEffects></HooksEffects>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
