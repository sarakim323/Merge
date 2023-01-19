import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SignInScreen from './screens/HomeScreen';
import Profile from './screens/ProfileScreen.js';
import HealthScreeningsEntry from './screens/HealthScreenings/HealthScreeningsEntryScreen.js';
import Provider from './screens/CareTeam/ProviderScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: '#7a7a78'}}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Profile" component={Profile} style={styles.container} />
        <Stack.Screen name="Health Screenings Entry" component={HealthScreeningsEntry} />
        <Stack.Screen name="Provider" component={Provider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;