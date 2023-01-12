import React, {useState} from 'react';
import {StyleSheet, Button, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {auth} from '../firebase';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('MM/DD/YYYY');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    setText(fDate);

    console.log('date: ', fDate);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with: ', user.email);
    })
    .catch(err => alert(err.message));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
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
        <TextInput
        placeholder="First Name"
        value= {firstName}
        onChangeText={text => setFirstName(text)}
        style={styles.input}
        />
        <TextInput
        placeholder="Last Name"
        value= {lastName}
        onChangeText={text => setLastName(text)}
        style={styles.input}
        />
        <Text style={styles.input} onPress={() => showMode('date')}>DOB: {text}</Text>
        {show &&
          (<RNDateTimePicker testID='dateTimePicker' value={date} mode={mode} display="spinner" onChange={onChange}
        />)}
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
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
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
});