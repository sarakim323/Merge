import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {KeyboardAvoidingView, Button, StyleSheet, Image, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import {auth} from '../../firebase.js';

const CareTeamScreen = () => {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const currentUserUid = currentUser.uid;

  // const entries = [
  //     {id: 1, providername: 'Dr. Safoora Harandi, DO', specialty: 'internal medicine', clinicname: 'Westlake Medical Associates', phonenumber: '123-456-7890'},
  //     {id: 2, providername: 'Dr. Joseph Pearson, MD', specialty: 'dermatology', clinicname: 'Evergreen Dermatology', phonenumber: '987-654-3210'},
  //     {id: 3, providername: 'Dr. Mary Hudgens, MD', specialty: 'OBGYN', clinicname: 'Hillside Obstetrics and Gynecology', phonenumber: '123-456-7890'},
  //     {id: 4, providername: 'Dr. Tam Nguyen, MD', specialty: 'cardiology', clinicname: 'Advanced Heart Care', phonenumber: '555-777-2315'},
  //     {id: 5, providername: 'Dr. Samuel Banks, MD', specialty: 'optometry', clinicname: 'First Eye Care', phonenumber: '246-813-5792'}
  // ];
  const entries = [
    {key: 1, providername: '(Example) Dr. Pearson, MD', specialty: 'Cardiology', clinicname: 'Advanced Heart Care', phonenumber: '(123)456-7890'
    }
  ]

  useEffect(() => {
    axios.get(`http://localhost:19001/user/profile/${currentUserUid}`)
    .then((res) => {
      console.log('successfully retrieved userId', res.data);
      let results = res.data.results[0];
      let id = results['id'];
      setUserId(id);
      axios.get(`http://localhost:19001/user/careteam/${id}`)
      .then((res) => {
        console.log('successfully retrieved careteam list', res.data.results);
        if(res.data.results.length === 0) {
          axios.post(`http://localhost:19001/user/careteam`, {
            userId: id
          })
          .then((res) => {
            console.log('successfully created new careteam id', res.data.id);
            setData(entries);
          })
          .catch((err) => {
            console.log('failed to create new careteam id')
          })
        } else {
          res.data.results[0]['providers'].length === 0
          if(res.data.results[0]['providers'].length === 0) {
            setData(entries);
          } else {
            setData(res.data.results[0]['providers']);
          }
        }
      })
      .catch((err) => {
        console.log('failed to retrieve care team list', err);
      })
    })
    .catch((err) => {
      console.log('failed to get user profile from DB', err)
    });
  }, [])

  const addEntry = () => {
    navigation.navigate('Add Provider', {
      userId: userId,
      submitHandler: submitHandler});
  }

  const submitHandler = (entry) => {
    setData((prevData) => {
      return [
        {key: Math.random().toString(), providername: entry.providername, specialty: entry.specialty, clinicname: entry.clinicname, phonenumber: entry.phonenumber},
        ...prevData,
      ]
    })
  }

  const deleteEntry = (id) => {
    console.log('desired deleted id', id);
    axios.delete(`http://localhost:19001/user/careteam/provider/${id}`, {
      id: id
    })
    .then((res) => {
      setData((prev) => {
        return prev.filter(entry => entry.id != id)
      })
      console.log('successfully deleted physician entry');
    })
    .catch((err) => {
      console.log('failed to delete physician entry', err);
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.description}>Click on the entry to delete!</Text>
      <FlatList data={data} keyExtractor={(item) => item.key} renderItem={({item}) =>
        <TouchableOpacity style={styles.entryContainer} onPress={() => navigation.navigate('Provider', {
          physicianId: item.id
        })} >
          <Text style={styles.item}>{item.providername}</Text>
          <Text style={styles.item}>{item.specialty}</Text>
          <Text style={styles.item}>{item.clinicname}</Text>
          <Text style={styles.item}>{item.phonenumber}</Text>
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

export default CareTeamScreen;

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
  description: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10
  },
  // gifImage: {
  //   resizeMode: 'contain',
  //   width: '50%',
  //   flex: 1,
  //   marginTop: 30
  // },
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