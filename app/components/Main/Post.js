import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        TouchableHighlight,
        Dimensions,
        Alert
      } from 'react-native';
//variables for post size
let PostWidth = Dimensions.get('window').width; //100% of window width
let PostHeight= Dimensions.get('window').height / 10; //10% of window height
var api = require('../api/JsonPlaceHolder');
/*
* @class: Containing every information for one post, including display format
*/
class Post extends Component {
  //constructor: taking properties passed from Main.js
  constructor(props) {
    super(props);
    this.state = { //storing the properties of the post
      post: this.props.post
    };
  }
  //event listener
  btEdit() {
    // console.log(this.state.post.id);
    this.props.navigator.push({
      id: 'EditPost',
      post: this.state.post
    });
  }
  btDelete() {
    api.deletePost(this.state.post);
    Alert.alert( 'Status',
                  'Post deleted!',
                  [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  { cancelable: false });
    this.props.navigator.pop(0);
  }
  btBack() {
    this.props.navigator.pop({
      id: 'Post'
    });
  }
  //render
  render() {
    return(
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.titleText}>Title: {this.state.post.title}</Text>

          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{this.state.post.body}</Text>
          </View>
          <View style={styles.menu}>
            <TouchableHighlight underlayColor='#888888' onPress={this.btEdit.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#888888' onPress={this.btDelete.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}> Delete </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.menu}>
          <TouchableHighlight underlayColor='#888888' onPress={this.btBack.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>
          </View>
        </View>
    );
  }
}
//styling
const styles = StyleSheet.create({
  container: {
    width: this.PostWidth,
    height: this.PostHeight,
    backgroundColor: '#ffffff',
    paddingBottom: 30
  },
  head: {
    height: 70,
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 20,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  menu:{
    flexDirection: 'row',
    height: 50,
    marginBottom: 1
  },
  body: {
    paddingBottom: 10,
    marginBottom: 40
  },
  bodyText: {
    fontSize: 32
  },
  button: {
    flex:1,
    height: 50,
    marginRight: 1,
    backgroundColor: '#aaaaaa',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 24
  }
});

module.exports = Post;
