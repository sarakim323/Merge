import {useNavigation} from '@react-navigation/core'
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {auth} from '../firebase'
import HealthScreeningsScreen from './HealthScreeningsScreen.js';
import CareTeamScreen from './CareTeamScreen.js';

const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name="HealthScreenings" component={HealthScreeningsScreen} />
//       <Tab.Screen name="CareTeam" component={CareTeamScreen} />
//     </Tab.Navigator>
//   )
// }

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(err => alert(err.message));
  }

  return (
    <View style = {styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      {/* <MyTabs /> */}
    </View>
  )
}

export default HomeScreen;

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