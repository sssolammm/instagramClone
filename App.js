import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './Styles/Styles';
import RutasNoAutenticadas from './Componentes/NoAutenticados/RutasNoAutenticadas';
import SignIn from './Componentes/NoAutenticados/SignIn';
import SignUp from './Componentes/NoAutenticados/SignUp';

// Libreria para la navegación en React
// npm install --save react-navigation
export class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram-clone' };
  }


  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    RutasNoAutenticadas,
  },
  {
    initialRouteName: 'RutasNoAutenticadas',
  },
);

export default createAppContainer(RootStack);
