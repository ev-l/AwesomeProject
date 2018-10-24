import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstValue: '',
      secondValue: '',
      sum: 0
    };
  }
  
  calculateSum = () => {
    const { firstValue, secondValue } = this.state;
  
    this.setState({
      sum: Number(firstValue) + Number(secondValue)
    });
  }
  
  render() {
    return (
      <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
      }}>

        <TextInput
          keyboardType="numeric"
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />
  
        <TextInput
          keyboardType="numeric"
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <Button onPress={this.calculateSum} title="Sum" />
        <Text style= {{textAlign: 'center'}}>The Sum is {`${this.state.sum}`}</Text>
      </View>
    );
  }
}
