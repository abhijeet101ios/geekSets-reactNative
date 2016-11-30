  import React, {Component} from 'react';
  import {AppRegistry, ListView, View, Image, Text, TouchableOpacity} from 'react-native';
  import {Actions} from 'react-native-router-flux';

  var urlList;

  var setList;

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
        <TouchableOpacity style={{flex:1}} onPress={()=> this._pressRow(this.props.text)}>
         <Image style={{flex:1}} source={require('./img/reminder_unselected.png')} />
         <Text style = {{flex:1, paddingLeft:20, backgroundColor:'white', color:'#00C26D',height:60}}>{this.props.text} </Text>
        </TouchableOpacity>
      );
    }
  }

  export default class CompanyViewController extends Component {
  constructor(props) {
  super(props);

  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>(r1 !== r2)});

  var companyInfo = this.props.set;

  var companyName = this.props.name;

   var arr = Object.keys(companyInfo).map(function (key) { return companyInfo[key]; });

  setList = [];

  urlList = [];

  for (var i = 0; i < arr.length; i++) {
   var child =  arr[i];
  //my code //my rules
   setList.push(child.name);
   urlList.push(child.url);
  }
  this.state = {
      id: 'companyView',
  dataSource: ds.cloneWithRows(setList)
    };
  }
  componentWillMount() {
    Actions.refresh({title: this.props.name, onRight:() => { Actions.login('test')}})
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
