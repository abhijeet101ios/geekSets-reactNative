'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator
} from 'react-native';

var companyList = require('./companyList');
var companyView = require('./CompanyView');

class DARNNavigator extends React.Component{
  constructor(props) {
  super(props);
  }

  render() {
    var initialRouteID = 'companyList';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'companyList':
        return (<companyList navigator={navigator} route={route} title="Companies"/>);
      // Add more ids here

      case 'companyView':
      return (<companyView navigator={navigator} route={route} title="Company"/>);

        break;
    }
  }
}


module.exports = DARNNavigator;
