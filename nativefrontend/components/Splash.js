import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}> SyncList App </Text>
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
    backgroundColor: '#2980b9',
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