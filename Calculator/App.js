/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>11*11</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>

          <View style={styles.operations}>
            <Button title="+" />
            <Button title="-" />
            <Button title="*" />
            <Button title="/" />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculationText:{
    fontSize:40,
    color: 'white',
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  resultText:{
    fontSize:80,
    color: 'black',    
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  result: {
    flex: 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
