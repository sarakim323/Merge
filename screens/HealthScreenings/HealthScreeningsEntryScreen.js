import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import axios from 'axios';

const HealthScreeningsEntry = ({ route }) => {
  const [hsId, setHSId] = useState(0);
  const [data, setData] = useState([]);
  const [newEntry, setNewEntry] = useState({});
  const navigation = useNavigation();

  const title = route.params?.title;
  const userID = route.params?.userID;

  useEffect(() => {
    let filteredEntries;
    let category;
    if (title === 'Medical') {
      category = 'medicals';
    } else if (title === 'Dental') {
      category = 'dentals';
    } else if (title === 'Vision') {
      category = 'visions';
    } else if (title === 'Women\'s Wellness') {
      category = 'womenwellnesses';
    } else if (title === 'Immunization') {
      category = 'immunizations';
    } else if (title === 'Other') {
      category = 'others';
    }

    axios.get(`http://localhost:19001/user/healthscreenings/${userID}`)
    .then((res) => {
      console.log('successfully retrieved health screening entries', res.data.results[0]);
      const allEntries = res.data.results[0];

      if(res.data.results.length === 0) {
        axios.post(`http://localhost:19001/user/healthscreenings`, {
          userId: userID
        })
        .then((res) => {
          console.log('successfully created new health screening id', res.data.id);
          setHSId(res.data.id);
          setData(allEntries);
        })
        .catch((err) => {
          console.log('failed to create new health screening id');
        })
      } else {
        setHSId(res.data.results[0]['id']);
        console.log('allEntries', allEntries);
        console.log('category', category);
        setData(allEntries[category])
      }
    })
    .catch((err) => {
      console.log('failed to retrieve health screening entries', err);
    })
  }, [newEntry])

  const addEntry = () => {
    navigation.navigate('Add Entry', {
      userID: userID,
      title: title,
      hsId: hsId,
      setNewEntry: setNewEntry
    });
  }

  const deleteEntry = (id) => {
    let hsname;
    if (title === 'Medical') {
      hsname = 'medical';
    } else if (title === 'Dental') {
      hsname = 'dental';
    } else if (title === 'Vision') {
      hsname = 'vision';
    } else if (title === 'Women\'s Wellness') {
      hsname = 'womenwellness';
    } else if (title === 'Immunization') {
      hsname = 'immunization';
    } else if (title === 'Other') {
      hsname = 'other'
    }

    axios.delete(`http://localhost:19001/user/healthscreenings/${hsname}/${id}`, {
      id: id
    })
    .then((res) => {
    setData((prev) => {
      return prev.filter(entry => entry.id != id)
    })
      console.log('successfully deleted health screening entry');
    })
    .catch((err) => {
      console.log('failed to delete health screening entry', err);
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.description}>Click on the entry to edit!</Text>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>
        <TouchableOpacity style={styles.entryContainer} onPress={() => navigation.navigate('Edit Entry', {id: item.id, title: title, setNewEntry: setNewEntry})} >
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.date}</Text>
          <Text style={styles.item}>{item.provider}</Text>
          <Text style={styles.item}>{item.notes}</Text>
          <TouchableOpacity style={[styles.deletebutton, styles.deletebuttonOutline]} onPress={() => deleteEntry(item.id)}>
            <Text style={styles.deletebuttonText}>Delete</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      } />
      <TouchableOpacity onPress={addEntry} style={styles.button}>
          <Text style={styles.buttonText}>Add Entry</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
};

export default HealthScreeningsEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: '#FAF9F6',
    fontWeight: '700'
  },
  entryContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#30a1c8',
    paddingHorizontal: 25,
    marginTop: 40,
    marginBottom: 10,
    width: 350,
    backgroundColor: '#45aed2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'tomato',
    borderColor: 'tomato',
    borderWidth: 2,
    width: '100%',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 16,
  },
  deletebutton: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 15
  },
  deletebuttonOutline: {
    backgroundColor: '#237693',
    marginTop: 10,
    borderColor:'#237693',
    borderWidth: 2,
  },
  deletebuttonText: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center'
  },
  description: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableSave: {
    backgroundColor: 'orange',
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20
  },
  textInput: {
    width: '90%',
    height: 70,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25
  }
});