import React, {Component} from 'react';
import {StyleSheet,
        View,
        ListView,
        Text,
        Image,
        TouchableHighlight
      } from 'react-native';

class Task1 extends Component{
  constructor(props) {
    super(props);

  }
  back(){
    this.props.navigator.pop();
  }
    //render
  render() {
    const profile_photo = require('../../../test.jpg');
    return(
      <View style = {styles.container}>
        <Image style={styles.profile} source={profile_photo} />
        <Text style={styles.text_inf}>Andy Herman</Text>
        <Text style={styles.text_inf}>#2 Basilischi Task 1</Text>
        <TouchableHighlight onPress={this.back.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#cccccc',

  },
  text_inf: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#444444'
  },
  text_inf_min: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000'
  },
  profile:{
    alignSelf: 'center',
    width: 300,
    height: 300
  },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#3fb0ac',
      marginTop: 2
    },
    buttonText: {
      fontSize: 30
    }
});
module.exports = Task1;
