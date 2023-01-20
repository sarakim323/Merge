import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {auth} from '../firebase.js';
import axios from 'axios';

const Profile = () => {
  const [medicalConditions, updateMedicalConditions] = useState('');
  const [allergies, updateAllergies] = useState('');
  const [bloodtype, updateBloodtype] = useState('');
  const [height, updateHeight] = useState('');
  const [weight, updateWeight] = useState('');

  let currentUser = auth.currentUser;
  let currentUserUid = currentUser.uid;

  const navigation = useNavigation();
  const route = useRoute();

  const handleEditProfile = () => {
    axios.get(`http://localhost:19001/user/profile/${currentUserUid}`)
    .then((res) => {
      console.log('result: ', res.data)
      axios.post('http://localhost:19001/user/profile/edit', {
        medicalconditions: medicalConditions,
        allergies: allergies,
        bloodtype: bloodtype,
        weight: weight,
        height: height,
        userid: res.data.results.id
      })
      .then((res) => {
        console.log('edited profile successfully');
        route.params.setMedicalConditions(medicalConditions);
        route.params.setAllergies(allergies);
        route.params.setBloodtype(bloodtype);
        route.params.setWeight(weight);
        route.params.setHeight(height);
        navigation.navigate('Home Tab');
      })
      .catch((err) => {console.log('failed to update user profile', err)});
    })
    .catch((err) => {console.log('failed to retrieve user id', err)})
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text>Medical Conditions:</Text>
        <TextInput
          value= {medicalConditions}
          autoCapitalize="none"
          onChangeText={text => updateMedicalConditions(text)}
          style={styles.input}
        />
        <Text>Allergies:</Text>
        <TextInput
          value= {allergies}
          autoCapitalize="none"
          onChangeText={text => updateAllergies(text)}
          style={styles.input}
        />
        <Text>Bloodtype:</Text>
        <TextInput
          value= {bloodtype}
          autoCapitalize="none"
          onChangeText={text => updateBloodtype(text)}
          style={styles.input}
        />
        <Text>Height:</Text>
        <TextInput
          value= {height}
          autoCapitalize="none"
          onChangeText={text => updateHeight(text)}
          style={styles.input}
        />
        <Text>Weight:</Text>
        <TextInput
          value= {weight}
          autoCapitalize="none"
          onChangeText={text => updateWeight(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={handleEditProfile}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Save</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

export default Profile;

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
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 70
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
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20
  },
});