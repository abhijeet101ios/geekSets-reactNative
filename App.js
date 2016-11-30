import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';

import Onboarding from './Onboarding';
import Login from './Login';
import CompanyList from './companyList';
import CompanyView from './CompanyView';
import Browser from './browser';

const App = () => {
return (
<Router>
 <Scene key="root">
  <Scene key="onboarding"  component={Onboarding} hideNavBar={true} type="JUMP"/>
  <Scene key="login" component={Login} hideNavBar={true} type="JUMP" initial/>
  <Scene key="companyList" component={CompanyList} title="Companies" rightTitle = "Login"
          onRight = {() => { Actions.pop()}} initial/>
  <Scene key="companyView" component={CompanyView} title="test" rightTitle = "Login"
          onRight = {() => { Actions.pop()}}/>
  <Scene key='browserView' component={Browser} title=""/>
 </Scene>
</Router>
);
}

export default App;
