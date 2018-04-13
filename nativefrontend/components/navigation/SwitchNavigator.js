import { SwitchNavigator } from 'react-navigation';
import Splash from '../loading/Splash';
import AuthStack from "../auth/AuthNav";
import AppStack from "../app/AppNav";


const nav = SwitchNavigator(
  {
    Splash: Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  }
);

export default nav;