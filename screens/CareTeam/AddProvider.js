import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {auth} from '../../firebase.js';
import axios from 'axios';

const AddProvider = ({ route }) => {
  const [providername, setprovidername] = useState('');
  const [specialty, setspecialty] = useState('');
  const [clinicname, setclinicname] = useState('');
  const [phonenumber, setphoneNumber] = useState('');

  const navigation = useNavigation();
  const submit = route.params?.submitHandler;

  const handleAddEntry = () => {
    // you need userId not uid
    // maybe store UID and userId in the index.js so child components can access them
    axios.get(`http://localhost:19001/user/careteam/${route.params.userId}`)
    .then((res) => {
      console.log('successfully retrieved careteam id', res.data);
      let newEntry = {providername: providername, specialty: specialty, clinicname: clinicname, phonenumber: phonenumber};
      submit(newEntry);
      navigation.navigate('Care Team Tab');
    })
    .catch((err) => {
      console.log('failed to retrieve care team id', err);
    })
    // axios.post(`http://localhost:19001/user/careteam`)
  };

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
          onPress={handleAddEntry}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Add</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

export default AddProvider;

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