import React, {Component} from 'react';
import * as firebase from 'firebase';
import {AppRegistry, ListView, View,} from 'react-native';

class CompanyCell extends Component {
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
this.state = {
  id: 'companyView'
}
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>(r1 !== r2)});
//this.itemsRef = firebaseApp.database().ref('/sets/');

var setList = this.props.dbSnapShot;


this.state = {
dataSource: ds.cloneWithRows([]),
};
}
componentDidMount() {
//  var companyName = this.props.route.passProps;
  //this.listenForItems(this.itemsRef.ref('/'+companyName+'/'));
}

listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
items.push(child.key);
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }
  render() {
    return (
 <ListView
 dataSource = {this.state.dataSource}
 renderRow = {(rowData) => <CompanyCell text={rowData}/>}
  //renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
    );
  }
}

AppRegistry.registerComponent('CompanyViewController',()=>CompanyViewController);
