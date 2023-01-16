import {useNavigation} from '@react-navigation/core'
import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {auth} from '../firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HealthScreeningsScreen from './HealthScreeningsScreen.js';
import CareTeamScreen from './CareTeamScreen.js';
import SettingsScreen from './SettingsScreen.js';

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.container}>
        <Text style = {styles.header}>Hello, </Text>
        <Text>{auth.currentUser?.email}</Text>
      </View>
      <View style = {styles.profilecontainer}>
        <Text>Health Profile</Text>
      </View>
    </KeyboardAvoidingView>
  )
};

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          if (route.name === 'Home Tab') {
            return (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color} />
            );
          } else if (route.name === 'Health Screenings Tab') {
            return (
              <Ionicons name={focused ? 'reader-sharp' : 'reader-outline'} size={size} color={color} />
            )
          } else if (route.name === 'Care Team Tab') {
            return (
              <Ionicons name={focused ? 'people-sharp' : 'people-outline'} size={size} color={color} />
            )
          } else if (route.name === 'Settings Tab') {
            return (
              <Ionicons name={focused ? 'settings-sharp' : 'settings-outline'} size={size} color={color} />
            )
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato'
      })}
      tabBarOptions={{showLabel: false}}
    >
      <Tab.Screen name='Home Tab' component={HomeScreen} />
      <Tab.Screen name='Health Screenings Tab' component={HealthScreeningsScreen} />
      <Tab.Screen name='Care Team Tab' component={CareTeamScreen} />
      <Tab.Screen name='Settings Tab' component={SettingsScreen} />
   </Tab.Navigator>
  )
}

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor:'#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  header: {
    color: 'black',
    fontWeight: '700',
    fontSize: 40
  },
  profilecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    padding: 25,
  },
});