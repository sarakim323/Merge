import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {auth} from '../firebase.js';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Sign In");
      }
    })
    return unsubscribe;
  }, [])

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with: ', user.email);
    })
    .catch(err => alert(err.message));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('../assets/logo-icon.png')} style={{width: '63%', height: '30%', resizeMode: 'center'}} />
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value= {email}
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Password"
        value= {password}
        autoCapitalize="none"
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer1}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
        <Text style={styles.or}>------------------------ OR ------------------------</Text>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    paddingTop: 50,
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#7a7a78',
    borderWidth: 0.2,
    marginTop: 5,
  },
  buttonContainer1: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonContainer2: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#afafac',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor:'#afafac',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#7a7a78',
    fontWeight: '700',
    fontSize: 16,
  },
  or: {
    color: '#7a7a78',
    paddingTop: 25,
  }
});