import React, { useState } from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineGraph() {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [chartParentHeight, setChartParentHeight] = useState(0);
  return (
    <View
      onLayout={({ nativeEvent }) => {
        setChartParentWidth(nativeEvent.layout.width);
        setChartParentHeight(nativeEvent.layout.height);
      }}
      className="absolute -top-7 h-full w-full">
      <LineChart
        data={{
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={chartParentWidth}
        height={chartParentHeight}
        // yAxisLabel=""
        // yAxisSuffix=""
        // yAxisInterval={1} // optional, defaults to 1
        withHorizontalLabels={false}
        chartConfig={{
          paddingRight: 0,
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          paddingTop: 20,
          paddingRight: 20,
        }}
      />
    </View>
  );
}
