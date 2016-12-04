import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Bananas from './app/components/Bananas';

export default class ReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello David !!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Bananas location='https://facebook.github.io/react/img/logo_og.png'/>
        <Bananas location='https://s-media-cache-ak0.pinimg.com/564x/a1/8b/38/a18b383a8a5dd36a59aec9a455a85503.jpg'/>
        <Bananas location='https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#a5b6d3',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
