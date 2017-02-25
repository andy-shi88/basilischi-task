import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text,
        TouchableHighlight,
        Dimensions
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
      id: this.props.post.id,
      userId: this.props.post.userId,
      title: this.props.post.title,
      body: this.props.post.body
    };
  }
  //event listener
  btEdit() {

  }
  btDelete() {

  }
  //render
  render() {
    return(
        <View style={styles.container}>
          <View style={styles.head}>
            <Text style={styles.titleText}>Title: {this.state.title}</Text>

          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{this.state.body}</Text>
          </View>
          <View style={styles.menu}>
            <TouchableHighlight underlayColor='#888888' onPress={this.btEdit} style={styles.btEdit}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#888888' onPress={this.btDelete} style={styles.btDelete}>
              <Text style={styles.buttonText}> Delete </Text>
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
    height: 20
  },
  body: {
    paddingBottom: 10,
    marginBottom: 40
  },
  bodyText: {
    fontSize: 32
  },
  btEdit: {
    flex:1,
    height: 50,
    marginRight: 1,
    backgroundColor: '#aaaaaa',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  btDelete: {
    flex: 1,
    height: 50,
    marginLeft: 1,
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
