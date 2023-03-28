import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.running) {
        this.setState({ time: this.state.time + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleStartStop = () => {
    this.setState({ running: !this.state.running });
  };

  handleReset = () => {
    this.setState({ time: 0 });
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  render() {
    return (
      <View>
        <Text style={styles.timer}>{this.formatTime(this.state.time)}</Text>
        <View style={styles.buttonContainer}>
          <Button title={this.state.running ? 'Stop' : 'Start'} onPress={this.handleStartStop} />
          <Button title="Reset" onPress={this.handleReset} />
        </View>
      </View>
    );
  }
}

const styles = {
  timer: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
};

export default Timer;
