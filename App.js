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
      <View>
        <TextInput
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />
  
        <TextInput
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <Button onPress={this.calculateSum} title="Sum" />
  
        <Text>{`${this.state.sum}`}</Text>
      </View>
    );
  }
}
