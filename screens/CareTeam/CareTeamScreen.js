import {useNavigation} from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
// import {auth} from '.../firebase';

const CareTeamScreen = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {key: items.length.toString()}]);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style = {styles.container}>
        <Text style = {styles.header}>Hello, </Text>
      </View>
      <FlatList style={styles.listcontainer} data={items} renderItem={({item}) => (
        <TouchableOpacity onPress={() => { navigation.navigate('Provider', {title: item.key})}}>
          <Text style={styles.listdetails}>{item.key}</Text>
        </TouchableOpacity>
      )} keyExtractor={item => item.id} key={items} />
      <Button style={styles.button} onPress={addItem} title="Add" />
    </KeyboardAvoidingView>
  )
};

export default CareTeamScreen;

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
    // borderWidth: 1,
    // borderRadius: 20,
    // borderColor: 'black',
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