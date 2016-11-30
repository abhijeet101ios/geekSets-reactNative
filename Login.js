import React, { Component } from 'react';
import {AppRegistry, View,StatusBar, Image, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  _pressLogin(data) {
Actions.pop();
  }

  _pressNotNow(data) {
    Actions.pop();
  }
render () {
  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
<View style={{backgroundColor:'white',flex:4, justifyContent: 'center',
    alignItems: 'center',}}>
<Image resizeMode="contain" style={{flex:1,width:200,height:200}} source={require('./img/login.png')}/>
</View>

<View style={{flex:3.2,flexDirection:'column'}}>
<Text style={{flex:0.15, color:'#00C26D',fontSize:14,paddingTop:30,paddingLeft:20,paddingRight:20,fontWeight:'500',textAlign: 'center',}}>Login to account in order to sync your progress across all the devices </Text>

<View style={{flex:0.1,paddingLeft:40,paddingRight:40}}>
<TouchableOpacity style={{flex:1,paddingLeft:40,paddingRight:40, backgroundColor:'#00C26D', flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={()=> this._pressLogin('test')}>
<Image resizeMode="contain" style={{backgroundColor:'#00C26D',flex:1}} source={require('./img/google_sign_in.png')}/>
<Text style = {{flex:5,fontSize:16,fontWeight:'600', paddingTop:20, paddingBottom:20, paddingLeft:20,backgroundColor:'#00C26D', color:'white',height:60}}>Sign in using Google</Text>
</TouchableOpacity>
</View>

<View style={{flex:0.1,paddingLeft:40,paddingRight:40}}>
<TouchableOpacity style={{paddingLeft:40,paddingRight:40, backgroundColor:'white',flex:1, flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={()=> this._pressNotNow('test')}>
<Text style = {{flex:1,fontSize:16,fontWeight:'600',textAlign: 'center', paddingTop:20, paddingBottom:20, paddingLeft:20,backgroundColor:'white', color:'gray',height:60}}>Not Now</Text>
</TouchableOpacity>
</View>

</View>
<View style={{backgroundColor:'white',flex:1, justifyContent: 'center',
    alignItems: 'center',}}>
</View>
</View>
    );
  }
}


AppRegistry.registerComponent('Login',()=>Login);
