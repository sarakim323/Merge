import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {KeyboardAvoidingView, Button, StyleSheet, Image, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
// import {auth} from '.../firebase';

const CareTeamScreen = () => {
  const [data, setData] = useState([]);
  // const route = useRoute();
  const navigation = useNavigation();

  const entries = [
      {id: 1, providername: 'Dr. Safoora Harandi, DO', specialty: 'internal medicine', clinicname: 'Westlake Medical Associates', phonenumber: '123-456-7890'},
      {id: 2, providername: 'Dr. Joseph Pearson, MD', specialty: 'dermatology', clinicname: 'Evergreen Dermatology', phonenumber: '987-654-3210'},
      {id: 3, providername: 'Dr. Mary Hudgens, MD', specialty: 'OBGYN', clinicname: 'Hillside Obstetrics and Gynecology', phonenumber: '123-456-7890'},
      {id: 4, providername: 'Dr. Tam Nguyen, MD', specialty: 'cardiology', clinicname: 'Advanced Heart Care', phonenumber: '555-777-2315'},
      {id: 5, providername: 'Dr. Samuel Banks, MD', specialty: 'optometry', clinicname: 'First Eye Care', phonenumber: '246-813-5792'}
  ];

  useEffect(() => {
      setData(entries);
  }, [])

  const addEntry = () => {
    navigation.navigate('Add Provider', {submitHandler});
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
    setData((prev) => {
      return prev.filter(entry => entry.id != id)
    })
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.description}>Click on the entry to delete!</Text>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>
        <TouchableOpacity style={styles.entryContainer} onPress={() => deleteEntry(item.id)} >
          <Text style={styles.item}>{item.providername}</Text>
          <Text style={styles.item}>{item.specialty}</Text>
          <Text style={styles.item}>{item.clinicname}</Text>
          <Text style={styles.item}>{item.phonenumber}</Text>
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

// const navigation = useNavigation();

// const [items, setItems] = useState([]);

// const addItem = () => {
//   setItems([...items, {key: items.length.toString()}]);
// }
{/* <KeyboardAvoidingView style={styles.container} behavior="padding">
<View style = {styles.container}>
<Text style = {styles.header}>Hello, </Text>
</View>
<FlatList style={styles.listcontainer} data={items} renderItem={({item}) => (
<TouchableOpacity onPress={() => { navigation.navigate('Provider', {title: item.key})}}>
  <Text style={styles.listdetails}>{item.key}</Text>
</TouchableOpacity>
)} keyExtractor={item => item.id} key={items} />
<Button style={styles.button} onPress={addItem} title="Add" />
</KeyboardAvoidingView> */}