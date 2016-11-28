import React, { Component } from 'react';
import Onboarding from 'react-native-simple-onboarding';
import {AppRegistry} from 'react-native';

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
    { backgroundColor: '#fff',  title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
    { backgroundColor: 'red',  title: 'Welcome', subtitle: 'To Earth' },
    { backgroundColor: "#999",  title: 'Also', subtitle: 'Mars is nice' },
  ]}
/>
);
}
}

AppRegistry.registerComponent('OnboardingClass', ()=> OnboardingClass);
