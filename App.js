import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SignInScreen from './screens/HomeScreen';
import ProfileEntry from './screens/ProfileEntryScreen.js';
import HealthScreeningsEntry from './screens/HealthScreeningsEntryScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Health Profile" component={ProfileEntry} />
        <Stack.Screen name="Health Screenings Entry" component={HealthScreeningsEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;