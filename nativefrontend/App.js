import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import StackComponent from './components/navigation/SwitchNavigator';

YellowBox.ignoreWarnings([ 
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',

]);

export default class App extends React.Component {
  render() {
    return (
        <StackComponent />
    );
  }
}
