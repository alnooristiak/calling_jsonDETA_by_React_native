import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/HomePage/Home';
// import HooksEffects from './src/screens/HooksEffects';
import LoginFrom from './src/screens/LoginFrom/LoginFrom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginFrom} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <LoginFrom></LoginFrom>
    //   {/* <HooksEffects></HooksEffects> */}
    //   <Home></Home>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
