import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import CompanyList from './companyList';
import CompanyView from './CompanyView';
import BrowserView from './browser';
import Onboarding from './Onboarding';

const App = () => {
return (
<Router>
<Scene key="root">
<Scene key="onboardingView" component={Onboarding} title="" initial/>
<Scene key="companyList" component={CompanyList} title="Companies"/>
<Scene key="companyView" component={CompanyView} title="test"/>
<Scene key="browserView" component={BrowserView} title=""/>
</Scene>
</Router>
);
}

export default App;
