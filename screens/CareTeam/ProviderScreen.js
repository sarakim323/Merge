import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {auth} from '../../firebase.js';
import axios from 'axios';

const Provider = () => {
  const [providername, setprovidername] = useState('');
  const [specialty, setspecialty] = useState('');
  const [clinicname, setclinicname] = useState('');
  const [phonenumber, setphoneNumber] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const physicianId = route.params.physicianId;
  const submit = route.params?.setNewProvider;

  const handleEditProvider = () => {
    axios.post(`http://localhost:19001/user/careteam/provider/edit`, {
      providername: providername,
      specialty: specialty,
      clinicname: clinicname,
      phonenumber: phonenumber,
      id: physicianId
    })
    .then((res) => {
      console.log('updated provider info', res.data);
      submit(res.data[0]);
      navigation.navigate('Care Team Tab');
    })
    .catch((res) => {
      console.log('failed to update provider info', err);
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text>Provider's Name:</Text>
        <TextInput
          value= {providername}
          autoCapitalize="none"
          onChangeText={text => setprovidername(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Specialty:</Text>
        <TextInput
          value= {specialty}
          autoCapitalize="none"
          onChangeText={text => setspecialty(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Clinic Name</Text>
        <TextInput
          value= {clinicname}
          autoCapitalize="none"
          onChangeText={text => setclinicname(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Phone Number</Text>
        <TextInput
          value= {phonenumber}
          autoCapitalize="none"
          onChangeText={text => setphoneNumber(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={handleEditProvider}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Save</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

export default Provider;


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