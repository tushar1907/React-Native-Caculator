/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  buttonPressed(text) {
    console.log(text);
  }
  render() {

    let rows = []
    let numbs = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity
          onPress={() => this.buttonPressed(numbs[i][j])}
          style={styles.btn}>
          <Text style={styles.btnText}>{numbs[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operations = ['D', '+', '-', '*', '/']
    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity style={styles.btn}><Text style={[styles.btnText, styles.white]}>{operations[i]}</Text></TouchableOpacity>)
    }
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
            {rows}
          </View>

          <View style={styles.operations}>
            {ops}
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
  btnText: {
    fontSize: 30
  },
  white: {
    color: 'white'
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  calculationText: {
    fontSize: 40,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 80,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'flex-end'
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
