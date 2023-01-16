import {useNavigation} from '@react-navigation/core'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {auth} from '../firebase'
import HealthScreeningsScreen from './HealthScreeningsScreen.js';
import CareTeamScreen from './CareTeamScreen.js';
import SettingsScreen from './SettingsScreen.js';

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
    </View>
  )
};

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator>
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
});