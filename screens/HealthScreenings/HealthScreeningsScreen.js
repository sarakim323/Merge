import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
// import {auth} from '.../firebase';

const HealthScreeningsScreen = () => {
  const navigation = useNavigation();

  const data = [
    {title: 'Medical'},
    {title: 'Dental'},
    {title: 'Vision'},
    {title: 'Women\'s Wellness'},
    {title: 'Other'}
  ];

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.container}>
        <Text style = {styles.header}>Hello, </Text>
      </View>
      <FlatList style={styles.listcontainer} data={data} renderItem={({item}) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Health Screenings Entry', {title: item.title})}}>
          <Text style={styles.listdetails}>{item.title}</Text>
        </TouchableOpacity>
      )} keyExtractor={item => item.id} key={data} />
    </KeyboardAvoidingView>
  )
};

export default HealthScreeningsScreen;

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
  listcontainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    padding: 25,
    marginBottom: 20,
    width: 350,
  },
  listdetails: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10
  },
  header: {
    color: 'black',
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 25
  }
});