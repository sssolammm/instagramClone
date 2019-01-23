import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../../Styles/Styles';

class SignIn extends Component {
    static navigationOptions =
    {
      title: 'SignIn',
    };

    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={styles.text}>This is SignIn Activity.</Text>
        </View>
      );
    }
}

export default SignIn;
