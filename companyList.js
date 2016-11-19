/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component} from 'react';
 import { ListView, TouchableHighlight, TouchableOpacity, Image, Alert, Button} from 'react-native';
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

 class CompanyCell extends Component {

   constructor(props) {
 super(props);
   }
   _pressRow (rowData) {
var selectedCompany = rowData;
Actions.companyView(selectedCompany)
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

 componentDidMount() {
     this.listenForItems(this.itemsRef);
   }

 listenForItems(itemsRef) {
     itemsRef.on('value', (snap) => {
       var items = [];
       snap.forEach((child) => {
 items.push(child.key);
       });
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(items),
         dbSnapShot:snap
       });
     });
   }

   _renderPush(data) {

     Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
)
    //  this.props.navigator.push({
    //        id: 'companyView',
    //        passProps: {
    //       }
    //        });
   }
   _renderRow (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
       return (
        // <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
      //  <Button onPress={()=> this._renderPush}
      //  title= {rowData}
      //  style = {{backgroundColor:'white', color:'#00686D',height:60}}>
      //  </Button>
      //    </View>
           <CompanyCell text={rowData}></CompanyCell>
       );
     }

   _pressRow (rowData) {
     Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
)
var selectedCompany = rowData;
     }
render () {

  return (
    <ListView
     dataSource={this.state.dataSource}
// renderRow={
//   <View style={{flex:1, flexDirection: 'column',justifyContent: 'center',paddingTop:20}}>
// <Button onPress={this._samplePush}
// title= {rowData}
// style = {{backgroundColor:'white', color:'#00686D',height:60}}>
// </Button>
//   </View>
// }
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
