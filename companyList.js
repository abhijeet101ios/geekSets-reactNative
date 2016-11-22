/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component} from 'react';
 import { ListView, TouchableHighlight, TouchableOpacity, Image, Button} from 'react-native';
 import * as firebase from 'firebase';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 import {Actions} from 'react-native-router-flux';

 // Initialize Firebase
 const firebaseConfig = {
   apiKey: "AIzaSyCra2uTXH3I_YUivgoZsNaHZoL0Iqu1Tj8",
   databaseURL: "https://amazonsets-298b8.firebaseio.com",
 };
 const firebaseApp = firebase.initializeApp(firebaseConfig);

var companyData;

 class CompanyCell extends Component {

   constructor(props) {
 super(props);
   }
   _pressRow (rowData) {
var selectedCompany = rowData;

var compnayInfo = this.props.setInfo;

Actions.companyView(compnayInfo)
     }

render () {

     return (
       <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
<Button onPress={()=> this._pressRow(this.props.text)}
title= {this.props.text}
style = {{backgroundColor:'white', color:'#00686D',height:60}}>
</Button>
       </View>
     );
   }
 }


 export default class geekSets extends Component {

 constructor(props) {
   super(props);
   let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>(r1 !== r2)});
   this.itemsRef = firebaseApp.database().ref('/sets/');
   this.state = {
   dataSource: ds.cloneWithRows([]),
   dbSnapShot:[],
 };
 }
 static getCurrentFirebaseRef() {
   return firebaseApp;
 }

 componentDidMount() {
     this.listenForItems(this.itemsRef);
   }

 listenForItems(itemsRef) {
     itemsRef.on('value', (snap) => {
       var items = [];
       var values = [];

        var localSnap = snap.ref;
       snap.forEach((child) => {
 items.push(child.key);

var childRef = child.val();

var companyName = child.key;

 values.push({'name':companyName,'set':childRef});
        });
        companyData = values;
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(items),
       });
     });
   }

   _renderPush(data) {

   }
   _renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {

var values = companyData;

var companySetInfo;

for (var i = 0; i < values.length; i++) {

var valueSnapShot = values[i];

if (  values[i].name == rowData) {
  companySetInfo = values[i];
}
}

       return (
        // <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
      //  <Button onPress={()=> this._renderPush}
      //  title= {rowData}
      //  style = {{backgroundColor:'white', color:'#00686D',height:60}}>
      //  </Button>
      //    </View>
      //console.log(this.state.dbSnapShot);
           <CompanyCell text={rowData} setInfo={companySetInfo}></CompanyCell>
       );
     }

   _pressRow (rowData) {

var selectedCompany = rowData;
     }
render () {

  return (
    <ListView
     dataSource={this.state.dataSource}

     renderRow={this._renderRow}
   />
     );
}
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });

 AppRegistry.registerComponent('geekSets', () => geekSets);
