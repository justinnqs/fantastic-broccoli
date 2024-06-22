import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export const LineGraph = () => {
  const ref = useRef<unknown>(null);
  const [enableScroll, setEnableScroll] = useState(true);
  const lineData = [
    { value: 4, label: '1 Jan' },
    { value: 14, label: '10 Jan' },
    { value: 8, label: '20 Jan' },
    { value: 38, label: '30 Jan' },
    { value: 36, label: '1 Feb' },
    { value: 28, label: '10 Feb' },
    { value: 14, label: '20 Feb' },
    { value: 28, label: '28 Feb' },
    { value: 4, label: '1 Mar' },
    { value: 14, label: '10 Mar' },
    { value: 8, label: '20 Mar' },
    { value: 14, label: '30 Mar' },
    { value: 8, label: '1 Apr' },
    { value: 38, label: '10 Apr' },
    { value: 14, label: '20 Apr' },
    { value: 28, label: '30 Apr' },
    { value: 4, label: '1 May' },
    { value: 10, label: '10 May' },
    { value: 8, label: '20 May' },
    { value: 14, label: '30 May' },
    { value: 8, label: '1 Jun' },
    { value: 38, label: '10 Jun' },
    { value: 14, label: '20 Jun' },
    { value: 28, label: '30 Jun' },
    { value: 4, label: '1 Jul' },
    { value: 28, label: '10 Jul' },
    { value: 4, label: '20 Jul' },
    { value: 14, label: '30 Jul' },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const showOrHidePointer = (ind: number) => {
    //@ts-expect-error
    ref.current?.scrollTo({
      x: ind * 200 - 25,
    }); // adjust as per your UI
  };

  React.useEffect(() => {
    setTimeout(() => {
      //@ts-expect-error
      ref.current?.scrollToEnd();
    }, 0);
  }, [ref]);

  return (
    <View>
      <View className="ml-2 flex-row">
        {months.map((_, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                padding: 6,
                margin: 4,
                backgroundColor: '#ebb',
                borderRadius: 8,
              }}
              onPress={() => showOrHidePointer(index)}>
              <Text>{months[index]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView scrollEnabled={false} className="flex flex-col" horizontal>
        <LineChart
          onPress={() => {
            setEnableScroll(false);
          }}
          scrollRef={ref}
          hideYAxisText
          areaChart
          curved
          data={lineData}
          spacing={68}
          color1="#56acce"
          startFillColor1="#56acce"
          endFillColor1="#56acce"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={10}
          yAxisColor="white"
          yAxisThickness={0}
          rulesType="dotted"
          rulesColor="gray"
          yAxisTextStyle={{ color: 'gray' }}
          yAxisLabelSuffix="%"
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripUptoDataPoint: true,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            strokeDashArray: [2, 5],
            pointerColor: 'lightgray',
            radius: 4,
            pointerLabelWidth: 100,
            pointerLabelHeight: 120,
            pointerLabelComponent: (items) => {
              return (
                <View
                  style={{
                    height: 120,
                    width: 100,
                    backgroundColor: '#282C3E',
                    borderRadius: 4,
                    justifyContent: 'center',
                    paddingLeft: 16,
                  }}>
                  <Text style={{ color: 'lightgray', fontSize: 12 }}>{2018}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[0]?.value}</Text>
                  <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{2019}</Text>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[1]?.value}</Text>
                </View>
              );
            },
          }}
        />
      </ScrollView>
    </View>
  );
};
