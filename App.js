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
import AddEntry from './screens/HealthScreenings/AddEntry.js';
import AddProvider from './screens/CareTeam/AddProvider.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: '#7a7a78'}}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Health Screenings Entry" component={HealthScreeningsEntry} options={{title: 'Entries'}}/>
        <Stack.Screen name="Add Entry" component={AddEntry} />
        <Stack.Screen name="Provider" component={Provider} options={{title: 'Provider'}}/>
        <Stack.Screen name="Add Provider" component={AddProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;