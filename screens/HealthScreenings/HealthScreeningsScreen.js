import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import {auth} from '../../firebase';
import axios from 'axios';

const HealthScreeningsScreen = () => {
  const [userID, setUserID] = useState('');
  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const currentUserUid = currentUser.uid;

  const data = [
    {id: 1, title: 'Medical'},
    {id: 2, title: 'Dental'},
    {id: 3, title: 'Vision'},
    {id: 4, title: 'Women\'s Wellness'},
    {id: 5, title: 'Other'}
  ];

  useEffect(() => {
    axios.get(`http://localhost:19001/user/profile/${currentUserUid}`)
    .then((res) => {
      console.log('retrieved user id successfully');
      setUserID(res.data.results[0]['id']);
    })
    .catch((err) => {
      console.log('failed in receiving user id: ', err);
    })
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={require('/Users/SaraKim/HackReactor/senior-phase/mvp/assets/mr.gif')} style= {styles.gifImage} />
      <Text style={styles.description}>Stay up to date with your health!</Text>
      <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Health Screenings Entry', {title: item.title, userID: userID})}}>
          <View style={styles.listcontainer}>
          <Text style={styles.listdetails}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )} keyExtractor={item => item.id} key={data.title} />
    </KeyboardAvoidingView>
  )
};

export default HealthScreeningsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
  },
  description: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10
  },
  gifImage: {
    resizeMode: 'contain',
    width: '50%',
    flex: 2,
    marginTop: 30
  },
  listcontainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#30a1c8',
    paddingHorizontal: 25,
    marginTop: 40,
    marginBottom: 10,
    width: 350,
    backgroundColor: '#45aed2',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center'
  },
  listdetails: {
    color: '#FAF9F6',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  header: {
    color: 'black',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 25
  }
});