import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import CompanyList from './companyList';
import CompanyView from './CompanyView';
import Browser from './browser';

const App = () => {
return (
<Router>
<Scene key="root">
<Scene key="companyList" component={CompanyList} title="Companies" initial/>
<Scene key="companyView" component={CompanyView} title="test"/>
<Scene key='browserView' component={Browser} title=""/>
</Scene>
</Router>
);
}

export default App;
