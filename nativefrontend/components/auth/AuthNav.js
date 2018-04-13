import { SwitchNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import Welcome from './Welcome';

const StackNav = SwitchNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: LoginScreen }
  }
);

export default StackNav;