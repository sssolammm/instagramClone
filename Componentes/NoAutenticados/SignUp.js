import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../Styles/Styles';

class SignUp extends Component {
    static navigationOptions =
    {
      title: 'SignUp',
    };

    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={styles.text}>This is SignUp Activity.</Text>
        </View>
      );
    }
}

export default SignUp;
