import React from 'react'
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen'

const StackNav = StackNavigator({
  Home: { 
    screen: HomeScreen 
  },

}
);

export default StackNav;