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

/*
* @class: Containing every information for one post, including display format
*/
class Post extends Component {
  //constructor: taking properties passed from jsonplaceholder
  constructor(props) {
    super(props);
    let rd = JSON.parse(this.props.rowData);
    this.state = { //storing the properties of the post
      id: rd.id,
      userId: rd.userId,
      title: rd.title,
      body: rd.body
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
            <Text style={styles.idText}>Title: {this.state.title}</Text>
            <Text style={styles.userIdText}>User id: {this.state.userId}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{this.state.body}</Text>
          </View>
          <View style={styles.menu}>
            <TouchableHighlight underlayColor='#ccaadd' onPress={this.btEdit} style={styles.btEdit}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#ccaadd' onPress={this.btDelete} style={styles.btDelete}>
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
    height: 20,
    flexDirection: 'row'
  },
  idText: {
    fontSize: 24,
    flex: 1
  },
  userIdText: {
    fontSize: 24,
    flex:1
  },
  menu:{
    flexDirection: 'row',
    height: 20
  },
  body: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#456789',
    fontSize: 30
  },
  btEdit: {
    flex:1,
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  btDelete: {
    flex: 1,
    width: 10,
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
