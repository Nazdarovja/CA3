import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';


export default class Splash extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.checkToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkToken = async () => {
    const userToken = await AsyncStorage.getItem('jwtToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> Seed App </Text>
          <ActivityIndicator />
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3542',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',

  }

})