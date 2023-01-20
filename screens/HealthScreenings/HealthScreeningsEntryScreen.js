import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import {auth} from '.../firebase';

const HealthScreeningsEntry = () => {
  const [data, setData] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  const title = route.params.title;
  const type = '';
  // if (title == 'Medical') {
  //   type === 'medicals';
  // } else if (title == 'Dental') {
  //   type === 'dentals';
  // } else if (title == 'Vision') {
  //   type === 'visions';
  // } else if (title == 'Women\'s Wellness') {
  //   type === 'womenwellnesses';
  // } else if (title == 'Other') {
  //   type === 'others';
  // }

  // console.log('HS title and type should match up: ', title, type);

  // const GetHealthScreenings = () => {
  //   // console.log('type inside get: ', type);
  //   axios.get(`http://localhost:19001/user/healthscreenings/${userId}`)
  //   .then((data) => {
  //     console.log('list of HS entries: ', data.results[0][type]);
  //   })
  //   .catch((err) => {
  //     console.log('failed in receiving health screenings entries: ', err);
  //   })
  // };

  // useEffect(() => {
  //   GetHealthScreenings();
  // }, [entries])
  const entries = {
    Medical: [
      {id: 1, date: '03/01/2020', name: 'Annual Physical Exam', provider: 'Dr. Shahina Shah, MD', notes: 'lab result - low TSH (0.32 mIU/L'},
      {id: 2, date: '06/15/2020', name: 'Thyroid F/U', provider: 'Dr. Shahina Shah, MD', notes: 'lab result - TSH (3.8 mIU/L'},
      {id: 3, date: '03/22/2021', name: 'Annual Physical Exam', provider: 'Dr. Shahina Shah, MD', notes: ''},
      {id: 4, date: '04/09/2021', name: 'COVID-19 Vaccination', provider: 'CVS', notes: 'first dose'}
    ],
    Dental: [
      {id: 5, date: '05/31/2022', name: 'Routine Dental Exam & Cleaning', provider: 'Dr. Mary Smith', notes: ''},
      {id: 6, date: '01/01/2023', name: 'Invisalign Follow Up', provider: 'Dr. Danny Moon', notes: '1 out of 8 trays'},
      {id: 7, date: '01/15/2023', name: 'Invisalign Follow Up', provider: 'Dr. Danny Moon', notes: '2 out of 8 trays'},
    ],
    Vision: [
      {id: 8, date: '12/13/2021', name: 'Routine Eye Exam', provider: 'Dr. Tiffany Doan', notes: 'p/u trial contacts by 12/20'},
      {id: 9, date: '12/18/2022', name: 'Routine Eye Exam', provider: 'Dr. Tiffany Doan', notes: ''},
    ],
   'Women\'s Wellness': [
      {id: 10, date: '08/31/2022', name: 'Routine Well-Woman Exam', provider: 'Dr. Samantha Carson', notes: ''},
    ],
    Other: [
      {id: 11, date: '01/29/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '1 out of 3 rounds'},
      {id: 12, date: '02/29/2022', name: 'Hydrafacial', provider: 'Avia Medical Spa', notes: ''},
      {id: 13, date: '03/27/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '2 out of 3 rounds'},
      {id: 14, date: '04/30/2022', name: 'Hydrafacial', provider: 'Avia Medical Spa', notes: ''},
      {id: 15, date: '05/30/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '3 out of 3 rounds'},
      {id: 16, date: '09/19/2022', name: 'Dermaplaning', provider: 'Atomic Beauty', notes: ''},
      {id: 17, date: '01/03/2023', name: 'Microdermabrasion', provider: 'Atomic Beauty', notes: ''},
    ]
  }

  useState(() => {
    const filteredentries = entries[title];
    setData(filteredentries);
  }, [])

  const addEntry = () => {
    navigation.navigate('Add Entry');
    // setData([...data, {key: data.date}]);
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
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.date}</Text>
          <Text style={styles.item}>{item.provider}</Text>
          <Text style={styles.item}>{item.notes}</Text>
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