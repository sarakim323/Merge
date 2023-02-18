import {useNavigation} from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
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
  console.log('current User', currentUser.uid);

  const navigation = useNavigation();
  // const focus = useIsFocused();

  // useEffect(() => {
  //   if (focus == true) {
  //     GetProfile();
  //   }
  // }, [focus])

  const GetProfile = () => {
    axios.get(`http://localhost:19001/user/profile/${currentUserUid}`)
    .then((res) => {
      console.log('successfully retrieved user profile from DB', res.data);
      let results = res.data.results[1]; // instead of replacing it added more to array
      let profile = results['profile'];
      console.log('profile', profile);
      setDOB(results['DOB']);
      setMedicalConditions(profile['medicalconditions']);
      setAllergies(profile['allergies']);
      setBloodtype(profile['bloodtype']);
      setHeight(profile['height']);
      setWeight(profile['weight']);
    })
    .catch((err) => {
      console.log('failed to get user profile from DB', err)
    });

    return (
      <View>
        <Text style={styles.profiledetails}>Medical Conditions:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{medicalConditions}</Text>
        </View>
        <Text style={styles.profiledetails}>Allergies:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{allergies}</Text>
        </View>
        <Text style={styles.profiledetails}>Bloodtype:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{bloodtype}</Text>
        </View>
        <Text style={styles.profiledetails}>Height:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{height}</Text>
        </View>
        <Text style={styles.profiledetails}>Weight:</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{weight}</Text>
        </View>
      </View>
    )
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.headercontainer}>
        <Image source={require('../assets/wave.png')} />
        <Text style = {styles.header}>  Hello! </Text>
      </View>
      <Text style= {styles.profileheader}>Health Profile</Text>
      <View style = {styles.profilecontainer}>
        <GetProfile />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {
            setMedicalConditions: (a) => setMedicalConditions(a),
            setAllergies: (b) => setAllergies(b),
            setBloodtype: (c) => setBloodtype(c),
            setHeight: (d) => setHeight(d),
            setWeight: (e) => setWeight(e)
          })}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonText}>Edit</Text>
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
        tabBarActiveTintColor: 'tomato',
        tabBarShowLabel: false,
        headerStyle: {backgroundColor: 'white'},
        headerTintColor: '#252525'
      })}
    >
      <Tab.Screen name='Home Tab' component={HomeScreen} />
      <Tab.Screen name='Health Screenings Tab' component={HealthScreeningsScreen} options={{title: 'Health Screenings'}}/>
      <Tab.Screen name='Care Team Tab' component={CareTeamScreen} options={{title: 'Care Team'}} />
      <Tab.Screen name='Settings Tab' component={SettingsScreen} options={{title: 'Settings'}}/>
   </Tab.Navigator>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 110,
  },
  buttonOutline: {
    backgroundColor: '#237693',
    marginTop: 10,
    borderColor:'#237693',
    borderWidth: 2,
  },
  buttonText: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 16,
  },
  header: {
    color: 'black',
    fontWeight: '700',
    fontSize: 35,
  },
  headercontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FAF9F6',
    marginTop: 30,
    marginHorizontal: 35,
  },
  inputContainer: {
    marginVertical: 6,
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#237693',
    borderWidth: 2,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    color: '#252525'
  },
  profilecontainer: {
    flex: 6,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#30a1c8',
    padding: 25,
    marginBottom: 50,
    width: 350,
    height: 600,
    marginHorizontal: 35,
    backgroundColor: '#45aed2',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profiledetails: {
    color: '#FAF9F6',
    fontWeight: '500',
    fontSize: 18,
    margin: 2
  },
  profileheader: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 25,
    marginLeft: 35
  }
});