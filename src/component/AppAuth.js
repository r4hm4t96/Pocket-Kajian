import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './common';
import LoginForm from './LoginForm';

export default class AppAuth extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqS4ADJI_GOYzcwTtWuGBOdWcN7BzcQeg',
      authDomain: 'authentification-14a32.firebaseapp.com',
      databaseURL: 'https://authentification-14a32.firebaseio.com',
      projectId: 'authentification-14a32',
      storageBucket: 'authentification-14a32.appspot.com',
      messagingSenderId: '340197485483'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentification" />
        <LoginForm /> 
      </View>
    );
  }
}
