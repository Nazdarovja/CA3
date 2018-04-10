import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Login from './components/login/Login';


export default class App extends React.Component {
  render() {
    return (
        <Login/>
    );
  }
}
