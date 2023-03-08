import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

const AddEntry = ({ route }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [notes, setNotes] = useState('');

  const navigation = useNavigation();
  const userID = route.params.userID;
  const title = route.params?.title;
  const hsID = route.params.hsId;
  const submit = route.params.setNewEntry;

  const handleAddEntry = () => {
    console.log('title: ', title);
    if (title === 'Medical') {
      axios.post(`http://localhost:19001/user/healthscreenings/medical`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted medical entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post medical entry', err);
      })
    } else if (title === 'Dental') {
      axios.post(`http://localhost:19001/user/healthscreenings/dental`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted dental entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post dental entry', err);
      })
    } else if (title === 'Vision') {
      axios.post(`http://localhost:19001/user/healthscreenings/vision`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted vision entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post vision entry', err);
      })
    } else if (title === 'Women\'s Wellness') {
      axios.post(`http://localhost:19001/user/healthscreenings/womenwellness`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted women wellness entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post women wellness entry', err);
      })
    } else if (title === 'Immunization') {
      axios.post(`http://localhost:19001/user/healthscreenings/immunization`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted immunization entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post immunization entry', err);
      })
    } else if (title === 'Other') {
      axios.post(`http://localhost:19001/user/healthscreenings/other`, {
        date: date,
        name: name,
        provider: provider,
        notes: notes,
        healthscreeningId: hsID
      })
      .then((res) => {
        console.log('successfully posted other entry', res.data);
        let newEntry = {
          id: res.data.id,
          date: res.data.date,
          name: res.data.name,
          provider: res.data.provider,
          notes: res.data.notes
        }
        submit(newEntry);
        navigation.navigate('Health Screenings Tab');
      })
      .catch((err) => {
        console.log('failed to post other entry', err);
      })
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text>Date:</Text>
        <TextInput
          value= {date}
          autoCapitalize="none"
          onChangeText={text => setDate(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          value= {name}
          autoCapitalize="none"
          onChangeText={text => setName(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Provider:</Text>
        <TextInput
          value= {provider}
          autoCapitalize="none"
          onChangeText={text => setProvider(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Notes:</Text>
        <TextInput
          value= {notes}
          autoCapitalize="none"
          onChangeText={text => setNotes(text)}
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

export default AddEntry;

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