import React, {useState} from 'react';
import {StyleSheet, Button, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {auth} from '../firebase';
import axios from 'axios';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('MM/DD/YYYY');

  const navigation = useNavigation();

  const PostUserInfo = (uid) => {
    const userData = {
      uid: uid,
      firstName: firstName,
      lastName: lastName,
      dob: text
    };

    axios.post('http://localhost:19001/user', userData)
    .then((res) => {
      console.log('successfully posted new user sign up info to DB');
      axios.post('http://localhost:19001/user/profile', {
        medicalconditions: '',
        allergies: '',
        bloodtype: '',
        weight: '',
        height: '',
        userid: res.data.id
      })
      .then((res) => {
        console.log('successfully posted new user profile to DB');
      })
      .catch((err) => {
        console.log('failed to post new user profile to DB', err);
      })
    })
    .catch((err) => {
      console.log('failed to post new user sign up info to DB: ', err);
    })
  }

  const dob = (event, selectedDate) => {
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
      const user = userCredentials.user.uid;
      console.log('user uid: ', user);
      PostUserInfo(user);
    })
    .catch(err => alert(err.message));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
        placeholder="Email"
        value= {email}
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <Text style={styles.text}>Password:</Text>
        <TextInput
        placeholder="Password"
        value= {password}
        autoCapitalize="none"
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
        <Text style={styles.text}>First Name:</Text>
        <TextInput
        placeholder="First Name"
        value= {firstName}
        onChangeText={text => setFirstName(text)}
        style={styles.input}
        />
        <Text style={styles.text}>Last Name</Text>
        <TextInput
        placeholder="Last Name"
        value= {lastName}
        onChangeText={text => setLastName(text)}
        style={styles.input}
        />
        <Text style={styles.text}>Date of Birth</Text>
        <Text style={styles.input} onPress={() => showMode('date')}>{text}</Text>
        {show &&
          (<RNDateTimePicker testID='dateTimePicker' value={date} mode={mode} display="spinner" onChange={dob}
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
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 30,
  },
  inputContainer: {
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
  buttonContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
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
  text: {
    paddingVertical: 15
  }
});