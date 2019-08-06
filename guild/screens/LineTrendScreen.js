import React, { Component } from 'react';
import { LineChart } from 'react-native-chart-kit'
import {
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native';
import PieChartComponent from '../components/PieChart';

class LineTrendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LineChart
          data={{
            labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
            datasets: [{
              data: [
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000,
                Math.random() * 100000
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={''}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 0,
          }}
        />
        <PieChartComponent />
      </View >
    );
  }
}

export default LineTrendScreen;