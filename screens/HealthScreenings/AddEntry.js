import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

const AddEntry = () => {
  const [id, setId] = useState(18);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [notes, setNotes] = useState('');

  const navigation = useNavigation();

  const handleAddEntry = () => {
    let newEntry = {id: id, date: date, name: name, provider: provider, notes: notes};
    navigation.navigate('Health Screenings Entry', {newEntry: newEntry});
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