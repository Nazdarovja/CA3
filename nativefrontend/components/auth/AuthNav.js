import { SwitchNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';

const StackNav = SwitchNavigator(
  {
    Login: { screen: LoginScreen }
  }
);

export default StackNav;