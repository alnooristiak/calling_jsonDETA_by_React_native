import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HooksEffects from './src/screens/HooksEffects';
import LoginFrom from './src/screens/LoginFrom/LoginFrom';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginFrom></LoginFrom>
      {/* <HooksEffects></HooksEffects> */}
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
