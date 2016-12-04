import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class Bananas extends Component {
  render() {
    return (
      <View style={styles.viewer}>
        <Image source={{uri: this.props.location}} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 193,
    height: 140,
  },
});
