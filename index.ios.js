import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class BasilischiTask extends Component {
  render() {
    return (
      <View>
        <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('BasilischiTask', () => BasilischiTask);
