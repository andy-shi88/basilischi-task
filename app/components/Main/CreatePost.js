import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        TouchableHighlight
      } from 'react-native';

class CreatePost extends Component {
  onButtonPress() {
    this.props.navigator.pop({
      id: 'CreatePost'
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.BigText}>CreatePost Scene</Text>
        <TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#facccc'
  },
  BigText: {
    fontSize: 52,
    color: '#889a00',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20
  },
  button: {
    flex:1,
    backgroundColor: '#cccccc'
  },
  buttonText:{
    color: '#44567a',
    fontSize: 40
  }
});

module.exports = CreatePost;
