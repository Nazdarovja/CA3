import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import facade from './loginFacade';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false, testText: "" };
  }

  login = async (username, password) => {
    facade.login(username, password);
    const bool = await facade.loggedIn();
    this.setState({ isLoggedin: bool });
    this.props.navigation.navigate('Splash');

  }

  // componentDidMount() {

  //   if (this.state.isLoggedin) {
  //     const json = facade.fetchData();
  //     this.setState({ testText: json });
  //   }
  // }

  render() {
    if (this.state.isLoggedin) {
      return (<View style={styles.container}>
        <Text style={styles.title}>{JSON.stringify(this.state.testText)}</Text>
      </View>)
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/icon.png')} />
          <Text style={styles.title}>Seed powered by React Native</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm login={this.login} />
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