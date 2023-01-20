import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {auth} from '../firebase.js';

const Settings = () => {
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
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.subcontainer}>
        <Text style={styles.header}>username</Text>
        <Text style={styles.user}>{auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/bye.gif')} style= {styles.gifImage} />
    </KeyboardAvoidingView>
  )
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FAF9F6',
  },
  button: {
    backgroundColor: '#237693',
    borderColor: '#237693',
    borderWidth: 2,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    // alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 16,
  },
  gifImage: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 30
  },
  header: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 35,
    marginBottom: 10
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#30a1c8',
    padding: 25,
    backgroundColor: '#45aed2',
    marginTop: 100
  },
  user: {
    color: '#FAF9F6',
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 25
  }
});