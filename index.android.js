import React, {Component} from 'react';
import {AppRegistry,
        Text,
        View,
        Navigator} from 'react-native';

var Main = require('./app/components/Main/Main');
var CreatePost = require('./app/components/Main/CreatePost');
var Post = require('./app/components/Main/Post');
var EditPost = require('./app/components/Main/EditPost');
var Task1 = require('./app/components/Main/Task1');

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
        return (<CreatePost navigator={navigator} functions={route.functions} title='Create Post' />)
        break;
      case 'Post':
        return (<Post navigator={navigator} title='Post' functions={route.functions} post={route.post}/>)
        break;
      case 'EditPost':
        return (<EditPost navigator={navigator} functions={route.functions} title='Edit Post' post={route.post}/>)
        break;
      case 'Task1':
        return (<Task1 navigator={navigator} title='Task 1' />)
        break;
      default:
        break;

    }
  }
}

AppRegistry.registerComponent('BasilischiTask', () => BasilischiTask);
