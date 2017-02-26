import React, {Component} from 'react';
import {StyleSheet,
        View,
        TextInput,
        Text,
        TouchableHighlight,
        Dimensions
      } from 'react-native';

let windowWidth = Dimensions.get('window').width;

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

  }
  cancelPost() {
    this.props.navigator.pop({
      id: 'CreatePost'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          multiline={true}>
          {this.state.postTitle}
        </TextInput>
        <TextInput
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
