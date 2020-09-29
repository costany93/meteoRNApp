
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import StackNavigator from './navigation/StackNavigator'


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <StackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
