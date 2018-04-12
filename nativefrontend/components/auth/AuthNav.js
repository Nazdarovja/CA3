import { StackNavigator } from 'react-native-navigation'

import LoginScreen from './LoginScreen';

const StackNav = StackNavigator(
  {
    Login: { screen: LoginScreen }
  }
);

export default StackNav;