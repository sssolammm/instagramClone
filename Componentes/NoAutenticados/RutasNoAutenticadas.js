import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../Styles/Styles';

export default class RutasNoAutenticadas extends Component {
  static navigationOptions =
  {
    title: 'Rutas no autenticadas',
  };

  gotoSignUpActivity = () => {
    this.props.navigation.navigate('SignUp');
  }

  gotoSignInActivity = () => {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.text}>This is Home Screen Activity.</Text>
        <Button onPress={this.gotoSignUpActivity} title="Sign Up" />
        <Button onPress={this.gotoSignInActivity} title="Sign In" />
      </View>
    );
  }
}
