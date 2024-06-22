import 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';

import { H1 } from './ui/typography';

const getMaxRadius = (ratio: number): number => {
  return 2 ** 0.5 / (2 * (1 + ratio * (1 + 2 ** 0.5)));
};

interface PollenCircleProps {
  size: number;
  color: string;
  label: string;
  isCenter?: boolean;
}

const PollenCircle: React.FC<PollenCircleProps> = ({ radius, color, label, index, maxRadius }) => {
  let topPos = 0;
  let leftPos = 0;
  if (index == 0) {
    topPos = 0.5 - radius;
    leftPos = 0.5 - radius;
  }
  if (index == 1) {
    topPos = 1 - 2 * radius;
    leftPos = 1 - 2 * radius;
  }
  if (index == 2) {
    topPos = 0;
    leftPos = 0;
  }
  if (index == 3) {
    topPos = 0;
    leftPos = 1 - 2 * radius;
  }
  if (index == 4) {
    topPos = 1 - 2 * radius;
    leftPos = 0;
  }
  // if(key == 2 ) {
  //   topPos = .5 +  (radius+ maxRadius) / (2 ** .5) - radius
  //   leftPos = .5 +  (radius+ maxRadius) / (2 ** .5) - radius
  // }
  const top = Math.floor(topPos * 100.0);
  const left = Math.floor(leftPos * 100.0);
  const diameter = Math.floor(radius * 100 * 2);
  const circleStyles = [
    'absolute',
    'aspect-square',
    'rounded-full',
    'justify-center',
    'items-center',
    `w-[${diameter}%]`,
    `h-[${diameter}%]`,
    `bg-${color}-800`,
    `top-[${top}%]`,
    `left-[${left}%]`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <View className={circleStyles}>
      <Text className="text-sm text-white">{label.replace(' ', '\n')}</Text>
    </View>
  );
};

interface PollenData {
  label: string;
  amount: number;
  color: string;
}

interface PollenDisplayProps {
  pollenData: PollenData[];
}

const PollenDisplay: React.FC<PollenDisplayProps> = ({ pollenData }) => {
  // Sort pollen data to ensure the largest circle is in the middle
  const sortedPollenData = [...pollenData].sort((a, b) => b.amount - a.amount);
  const radiusRatios = sortedPollenData.map(
    (elem) => (elem.amount / sortedPollenData[0].amount) ** 0.5
  );
  const largestRadius = getMaxRadius(radiusRatios[1]);
  console.log('Rendering circles');

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <View className="relative h-80 w-80">
        {sortedPollenData.map((pollen, index) => (
          <PollenCircle
            key={index}
            index={index}
            radius={radiusRatios[index] * largestRadius}
            color={pollen.color}
            label={pollen.label}
            maxRadius={largestRadius}
          />
        ))}
      </View>
    </View>
  );
};

const PollenView: React.FC = () => {
  const pollenData: PollenData[] = [
    { label: 'Tree Pollen', amount: 40, color: 'red' },
    { label: 'Grass Pollen', amount: 30, color: 'yellow' },
    { label: 'Weed Pollen', amount: 45, color: 'green' },
    { label: 'Flower Pollen', amount: 55, color: 'blue' },
    { label: 'Other Pollen', amount: 50, color: 'orange' },
  ];

  return <PollenDisplay pollenData={pollenData} />;
};

export default PollenView;
