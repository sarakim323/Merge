import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const Home = () => {
  const {authorize, clearSession, user} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
    } catch (err) {
      console.log(err);
    }
  }

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (err) {
      console.log('log out canceled');
    }
  }

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      <Button onPress={loggedIn ? onLogout : onLogin} title={loggedIn ? 'Log Out' : 'Log In'} />
    </View>
  )
}
const App = () => {
  return (
    <Auth0Provider domain={"dev-3bi7ivsjmisvh51y.us.auth0.com"} clientId={"UZwPDspPVe1yrjSkkvtDdVP1uhDs4CqW"}>
      <Home />
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;