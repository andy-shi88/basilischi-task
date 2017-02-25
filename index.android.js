import React, {Component} from 'react';
import {AppRegistry,
        Text,
        View,
        Navigator} from 'react-native';

var Main = require('./app/components/Main/Main');
var CreatePost = require('./app/components/Main/CreatePost');
var Post = require('./app/components/Main/Post');

export default class BasilischiTask extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{
          id:'Main'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Main':
        return (<Main navigator={navigator} title='Main' />)
        break;
      case 'CreatePost':
        return (<CreatePost navigator={navigator} title='Create Post' />)
        break;
      case 'Post':
        return (<Post navigator={navigator} title='Post' rowData={route.rowData}/>)
        break;
      default:
        break;

    }
  }
}

AppRegistry.registerComponent('BasilischiTask', () => BasilischiTask);
