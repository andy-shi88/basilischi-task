import React, {Component} from 'react';
import {StyleSheet,
        View,
        TextInput,
        Text,
        TouchableHighlight,
        Dimensions,
        Alert
      } from 'react-native';

let windowWidth = Dimensions.get('window').width;
let api = require('../api/JsonPlaceHolder');

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: '', //generate later
      postUserId: '12', //default user [whatever]
      postTitle: '',
      postBody: ''
    };
  }
  savePost() {
    let post = {
      id: this.state.postId,
      userId: this.state.postUserId,
      title: this.state.postTitle,
      body: this.state.postBody
    }
    api.createPost(post);
    Alert.alert( 'Status',
                  'Content have been posted!',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                    { cancelable: false } );
    this.props.navigator.pop(0);
  }
  cancelPost() {
    this.props.navigator.pop(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          style={styles.titleInput}
          multiline={true}>
          {this.state.postTitle}
        </TextInput>
        <TextInput
            placeholder="Content"
           style={styles.bodyInput}
           onChangeText={(text) => this.setState({postBody: text})}
           value={this.state.postBody}
           multiline={true}
         />
         <View style={styles.buttons}>
          <TouchableHighlight onPress={this.cancelPost.bind(this)} underlayColor='#888888' style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.savePost.bind(this)} underlayColor='#888888' style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  bodyInput: {
    flex: 4,
    marginTop: 1,
    fontSize: 26
  },
  titleInput: {
    flex: 1,
    marginBottom: 1,
    fontSize: 30
  },
  buttons: {
    flex: 1,
    width: windowWidth,
    height: 90,
    flexDirection: 'row',
    flex: 1,
    marginTop: 40
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#004400',
    alignSelf: 'center'
  }

});

module.exports = CreatePost;
