import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { H1, H4 } from '~/components/ui/typography';

type CalendarProps = {
  ratings: number[];
};

function getRandomShade(min: number, max: number): string {
  const shades = [
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
  ];
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return shades[num];
}

const renderRows = () => {
  const items = Array.from({ length: 4 });
  return items.map((_, index) => (
    <TableRow key={`${index}`} className="active:bg-secondary">
      {renderRow(index)}
    </TableRow>
  ));
};

const renderRow = (p_index: number) => {
  const items = Array.from({ length: 7 });
  return items.map((_, index) => (
    <TableCell
      key={`${p_index}${index}`}
      className={`aspect-square ${index === 6 ? 'border-x-2' : 'border-l-2'} w-1/7 border-gray-300 ${getRandomShade(0, 5)}`}
    />
  ));
};

export const Calendar = ({ ratings }: CalendarProps): JSX.Element => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Sun</H4>
          </TableHead>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Mon</H4>
          </TableHead>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Tue</H4>
          </TableHead>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Wed</H4>
          </TableHead>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Thu</H4>
          </TableHead>
          <TableHead className="w-1/7 border-l-2 border-gray-300">
            <H4>Fri</H4>
          </TableHead>
          <TableHead className="w-1/7 border-x-2 border-gray-300">
            <H4>Sat</H4>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{renderRows()}</TableBody>
    </Table>
  );
};
