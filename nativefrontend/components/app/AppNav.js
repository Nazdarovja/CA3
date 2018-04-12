import React from 'react'
import { StackNavigator } from 'react-native-navigation';

import Home from './Home'

// const routeConfig = {
//   Home: { screen: Home }
// }

const StackNav = StackNavigator({
  Home: { screen: Home }
}
);


export default StackNav;