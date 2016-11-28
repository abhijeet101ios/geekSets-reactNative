import React, {Component} from 'react';
import {AppRegistry, ListView, View, Text, Button, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

//import companyList from './companyList';

// require('firebase/auth');
// require('firebase/database');
var urlList;

var setList = [];

class SetCell extends Component {
  constructor(props) {
super(props);
  }
  _pressRow (rowData) {
var selectedCompany = rowData;

var compnayInfo = this.props.setInfo;

var url = this.props.url;

Actions.browserView(url)
    }
  render () {
    return (
      <TouchableOpacity onPress={()=> this._pressRow(this.props.text)}>
    <Text style = {{paddingLeft:20, backgroundColor:'white', color:'#00C26D',height:60}}>{this.props.text} </Text>
        </TouchableOpacity>
    );
      // <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
      // <Button onPress={()=> this._pressRow(this.props.text)}
      // title= {this.props.text}
      // style = {{height:60}}>
      // </Button>
      // </View>
    //);
  }
}

export default class CompanyViewController extends Component {
constructor(props) {
super(props);

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>(r1 !== r2)});

//var firebaseApp = companyList.getCurrentFirebaseRef;

var companyInfo = this.props.set;

var companyName = this.props.name;

 var arr = Object.keys(companyInfo).map(function (key) { return companyInfo[key]; });

urlList = [];

for (var i = 0; i < arr.length; i++) {
 var child =  arr[i];

var temp = child;

//my code //my rules

var temp2;

 setList.push(child.name);
 urlList.push(child.url);
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
_renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {

return (<SetCell text={rowData} url={urlList[rowID]}/>);
}

render() {

    return (
 <ListView
 style={{paddingTop:80}}
 enableEmptySections={true}
 dataSource = {this.state.dataSource}
 renderRow = {this._renderRow}/>
    );
  }
}

AppRegistry.registerComponent('CompanyViewController',()=>CompanyViewController);
