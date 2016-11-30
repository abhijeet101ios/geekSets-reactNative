import React, { Component } from 'react';
import Onboarding from 'react-native-simple-onboarding';
import {AppRegistry, Image} from 'react-native';

export default class OnboardingClass extends Component {
constructor (props) {
super(props);
this.state = {
  id: 'onboardingView'
};
}
render () {
return (
<Onboarding
  pages={[
    { backgroundColor: '#000', image: <Image source={require('./img/reminder_unselected.png')} />, title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
      { backgroundColor: "#fe6e58", image: <Image source={require('./img/reminder_unselected.png')} />, title: 'Welcome', subtitle: 'To Earth' },
      { backgroundColor: "#999", image: <Image source={require('./img/reminder_unselected.png')} />, title: 'Also', subtitle: 'Mars is nice' },
  ]}
/>
);
}
}

AppRegistry.registerComponent('OnboardingClass', ()=> OnboardingClass);
