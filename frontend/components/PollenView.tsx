import 'nativewind';
import React from 'react';
import { Text, View } from 'react-native';

// Function to generate random positions for circles
const getRandomPosition = () => {
  const min = 0;
  const max = 100;
  return {
    top: Math.floor(Math.random() * (max - min + 1)) + min,
    left: Math.floor(Math.random() * (max - min + 1)) + min,
  };
};

interface PollenCircleProps {
  size: number;
  color: string;
  label: string;
  isCenter?: boolean;
}

const PollenCircle: React.FC<PollenCircleProps> = ({ size, color, label, isCenter = false }) => {
  const randomPosition = getRandomPosition();

  const circleStyles = [
    'absolute',
    'aspect-square',
    'rounded-full',
    'justify-center',
    'items-center',
    `w-${size}`,
    `h-${size}`,
    `bg-${color}-800`,
    // !isCenter && `top-[${randomPosition.top}%]`,
    // !isCenter && `left-[${randomPosition.left}%]`,
    isCenter && 'top-1/2',
    isCenter && 'left-1/2',
    // isCenter && '-translate-x-1/2',
    // isCenter && '-translate-y-1/2',
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
  const largestPollen = sortedPollenData[0];

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <View className="relative h-80 w-80">
        <PollenCircle
          size={largestPollen.amount}
          color={largestPollen.color}
          label={largestPollen.label}
          isCenter
        />
        {sortedPollenData.slice(1).map((pollen, index) => (
          <PollenCircle
            key={index}
            size={pollen.amount}
            color={pollen.color}
            label={pollen.label}
          />
        ))}
      </View>
    </View>
  );
};

const PollenView: React.FC = () => {
  const pollenData: PollenData[] = [
    { label: 'Tree Pollen', amount: 40, color: 'red' },
    { label: 'Grass Pollen', amount: 70, color: 'yellow' },
    // { label: 'Weed Pollen', amount: 72, color: 'green' },
    // { label: 'Flower Pollen', amount: 48, color: 'blue' },
  ];

  return <PollenDisplay pollenData={pollenData} />;
};

export default PollenView;
