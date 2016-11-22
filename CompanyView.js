import React, {Component} from 'react';
import {AppRegistry, ListView, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

//import companyList from './companyList';

// require('firebase/auth');
// require('firebase/database');

class SetCell extends Component {
  constructor(props) {
super(props);
  }
  render () {
    return (
      <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
      <Text style = {{backgroundColor:'white', color:'#00686D',height:60}}> {this.props.text}</Text>
      </View>
    );
  }
}

export default class CompanyViewController extends Component {
constructor(props) {
super(props);

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>(r1 !== r2)});

//var firebaseApp = companyList.getCurrentFirebaseRef;

var companyInfo = this.props.set;

var companyName = this.props.name;

 var setList = [];

 var arr = Object.keys(companyInfo).map(function (key) { return companyInfo[key]; });

for (var i = 0; i < arr.length; i++) {
 var child =  arr[i];

var temp = child;

//my code //my rules

var temp2;

 setList.push(child.name);
}

// companyInfo.keys.forEach((child) => {
// setList.push(child.key);
//
// //var childRef = child.ref;
//
// //values.push({childRef:child});
//  });

//this.itemsRef = firebaseApp.database().ref('/sets/'+companyName);

this.state = {
    id: 'companyView',
dataSource: ds.cloneWithRows(setList)
};

}

  render() {
    return (
 <ListView
 dataSource = {this.state.dataSource}
 renderRow = {(rowData) => <SetCell text={rowData}/>}
  //renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
    );
  }
}

AppRegistry.registerComponent('CompanyViewController',()=>CompanyViewController);
