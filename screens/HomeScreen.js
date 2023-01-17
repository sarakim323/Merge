import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {auth} from '../firebase'
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HealthScreeningsScreen from './HealthScreenings/HealthScreeningsScreen.js';
import CareTeamScreen from './CareTeam/CareTeamScreen.js';
import SettingsScreen from './SettingsScreen.js';
import Profile from './ProfileScreen.js';

const HomeScreen = () => {
  const [dob, setDOB] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [allergies, setAllergies] = useState('');
  const [bloodtype, setBloodtype] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  let currentUser = auth.currentUser;
  let currentUserUid = currentUser.uid;
  const navigation = useNavigation();

  // useEffect(() => {
  //   const focusHandler = navigation.addListener('focus', () => {
  //     Alert.alert('Refreshed');
  //   });
  //   return focusHandler;
  // }, [navigation]);

  const GetProfile = () => {
    axios.get(`http://localhost:19001/user/profile/${currentUserUid}`)
    .then((res) => {
      console.log('successfully retrieved user profile from DB', res.data.results[0]);
      let results = res.data.results[0];
      setDOB(results.dob);
      setMedicalConditions(results.medicalconditions);
      setAllergies(results.allergies);
      setBloodtype(results.bloodtype);
      setHeight(results.height);
      setWeight(results.weight);
    })
    .catch((err) => {
      console.log('failed to get user profile from DB', err)
    });
    return (
      <View>
        <Text style={styles.profiledetails}>DOB: {dob}</Text>
        <Text style={styles.profiledetails}>Medical Conditions: {medicalConditions}</Text>
        <Text style={styles.profiledetails}>Allergies: {allergies}</Text>
        <Text style={styles.profiledetails}>Bloodtype: {bloodtype}</Text>
        <Text style={styles.profiledetails}>Height: {height}</Text>
        <Text style={styles.profiledetails}>Weight: {weight}</Text>
      </View>
    )
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.container}>
        <Text style = {styles.header}>Hello, </Text>
        <Text>{auth.currentUser?.email}</Text>
      </View>
      <View style = {styles.profilecontainer}>
        <Text style= {styles.profileheader}>Health Profile</Text>
        <GetProfile />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {setMedicalConditions: setMedicalConditions, setAllergies: setAllergies, setBloodtype: setBloodtype, setHeight: setHeight, setWeight: setWeight})}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
};

const Tab = createBottomTabNavigator();

const SignInScreen = () => {
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

export default SignInScreen;

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
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    padding: 25,
    marginBottom: 20,
    width: 350
  },
  profiledetails: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10
  },
  profileheader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 25
  }
});