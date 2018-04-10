import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import facade from './loginFacade'

export default class Login extends Component {
  
  login = (username, password) => {
    facade.login(username, password);
  }

  
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/icon.png')} />
          <Text style={styles.title}> Seed powered by React Native</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm login={this.login}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535c68',

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,

  },
  title: {
    color: '#ecf0f1',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9,

  },
})