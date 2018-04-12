import React from 'react'
import { StackNavigator } from 'react-navigation';

import Home from './Home'

// const routeConfig = {
//   Home: { screen: Home }
// }

const StackNav = StackNavigator({
  Home: { screen: Home }
}
);


export default StackNav;