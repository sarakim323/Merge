import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import {auth} from '.../firebase';

const Provider = (props) => {
  const [providerName, setProviderName] = ('');
  const [specialty, setSpecialty] = ('');
  const [clinicName, setClinicName] = ('');
  const [phoneNumber, setphoneNumber] = ('');

  return (
    <View>Did it work</View>
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    //   <View style={styles.inputContainer}>
    //     <Text>Provider's Name:</Text>
    //     <TextInput
    //       value= {medicalConditions}
    //       autoCapitalize="none"
    //       onChangeText={text => updateMedicalConditions(text)}
    //       style={styles.input}
    //     />
    //     <Text>Specialty:</Text>
    //     <TextInput
    //       value= {allergies}
    //       autoCapitalize="none"
    //       onChangeText={text => updateAllergies(text)}
    //       style={styles.input}
    //     />
    //     <Text>Clinic's Name:</Text>
    //     <TextInput
    //       value= {bloodtype}
    //       autoCapitalize="none"
    //       onChangeText={text => updateBloodtype(text)}
    //       style={styles.input}
    //     />
    //     <Text>Phone Number:</Text>
    //     <TextInput
    //       value= {height}
    //       autoCapitalize="none"
    //       onChangeText={text => updateHeight(text)}
    //       style={styles.input}
    //     />
    //   </View>
    //   <View style={styles.buttonContainer}>
    //       <TouchableOpacity
    //       onPress={handleEditProfile}
    //       style={[styles.button, styles.buttonOutline]}>
    //         <Text style={styles.buttonOutlineText}>Save</Text>
    //       </TouchableOpacity>
    //   </View>
    // </KeyboardAvoidingView>
  )
};

export default Provider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
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