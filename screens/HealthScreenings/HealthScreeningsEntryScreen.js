import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {FlatList, KeyboardAvoidingView, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import {auth} from '.../firebase';

const HealthScreeningsEntry = () => {
  const [data, setData] = useState(entries);
  const [isRender, setisRender] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setinputText] = useState();
  const route = useRoute();

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
      {date: '03/01/2020', name: 'Annual Physical Exam', provider: 'Dr. Shahina Shah, MD', notes: 'lab result - low TSH (0.32 mIU/L'},
      {date: '06/15/2020', name: 'Thyroid F/U', provider: 'Dr. Shahina Shah, MD', notes: 'lab result - TSH (3.8 mIU/L'},
      {date: '03/22/2021', name: 'Annual Physical Exam', provider: 'Dr. Shahina Shah, MD', notes: ''},
      {date: '04/09/2021', name: 'COVID-19 Vaccination', provider: 'CVS', notes: 'first dose'}
    ],
    Dental: [
      {date: '05/31/2022', name: 'Routine Dental Exam & Cleaning', provider: 'Dr. Mary Smith', notes: ''},
      {date: '01/01/2023', name: 'Invisalign Follow Up', provider: 'Dr. Danny Moon', notes: '1 out of 8 trays'},
      {date: '01/15/2023', name: 'Invisalign Follow Up', provider: 'Dr. Danny Moon', notes: '2 out of 8 trays'},
    ],
    Vision: [
      {date: '12/13/2021', name: 'Routine Eye Exam', provider: 'Dr. Tiffany Doan', notes: 'p/u trial contacts by 12/20'},
      {date: '12/18/2022', name: 'Routine Eye Exam', provider: 'Dr. Tiffany Doan', notes: ''},
    ],
   'Women\'s Wellness': [
      {date: '08/31/2022', name: 'Routine Well-Woman Exam', provider: 'Dr. Samantha Carson', notes: ''},
    ],
    Other: [
      {date: '01/29/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '1 out of 3 rounds'},
      {date: '02/29/2022', name: 'Hydrafacial', provider: 'Avia Medical Spa', notes: ''},
      {date: '03/27/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '2 out of 3 rounds'},
      {date: '04/30/2022', name: 'Hydrafacial', provider: 'Avia Medical Spa', notes: ''},
      {date: '05/30/2022', name: 'Microneedling', provider: 'Avia Medical Spa', notes: '3 out of 3 rounds'},
      {date: '09/19/2022', name: 'Dermaplaning', provider: 'Atomic Beauty', notes: ''},
      {date: '01/03/2023', name: 'Microdermabrasion', provider: 'Atomic Beauty', notes: ''},
    ]
  }

  const addEntry = () => {

  };

  const onPressSaveEdit = () => {

  };

  const onPressItem = () => {
    setisModalVisible(true);
    setinputText(item.text);
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList data={entries[title]} keyExtractor={(item) => item.data} extraData={isRender} renderItem={({item}) =>
        <TouchableOpacity style={styles.entryContainer}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.date}</Text>
          <Text style={styles.item}>{item.provider}</Text>
          <Text style={styles.item}>{item.notes}</Text>
        </TouchableOpacity>
      }/>
      <Modal animationType='fade' visible={isModalVisible} onRequestClose={() => setisModalVisible(false)}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Change Text: </Text>
          <TextInput style={styles.textInput} onChangeText={(text) => setinputText(text)} defaultValue={inputText} editable={true} multiline={false} maxLength={200} />
          <TouchableOpacity onPress={() => onPressSaveEdit()} style={styles.touchableSave}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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