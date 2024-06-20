import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { Button } from './Button';
import { LineGraph } from './LineGraph';
import { Avatar } from './ui/avatar';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { H1 } from './ui/typography';
import PollenView from './PollenView';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <ScrollView className="flex flex-1 p-4">
      <View className="flex-1 gap-4">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-col gap-1">
            <H1 className="mb-2 text-5xl">Hello,</H1>
            <H1 className="mb-2 text-5xl">Justin Sian</H1>
          </View>
          <View className="aspect-square h-28 rounded-full border-2">
            <Link href="chat">
              <Pressable>
                <Avatar alt="avatar" />
              </Pressable>
            </Link>
          </View>
        </View>
        <Separator />
        <View className="flex-col gap-2">
          <View className="h-72 w-full flex-row justify-between pl-1">
            <Card className="h-full w-full">
              <LineGraph
                data={[12, 5, 9, 30, 20, 51, 20, 1, 4, 2, 70, 0, 10, 5]}
                color="rose"
                label="Allergies"
                stat="10"
              />
            </Card>
          </View>
          <View className="w-full flex-row">
            <View className="w-1/2 flex-col pr-1">
              <View className="h-56 w-full flex-row pb-2">
                <Card className="h-full w-full" />
              </View>
              <View className="h-56 w-full flex-row">
                <Card className="h-full w-full" />
              </View>
            </View>
            <View className="w-1/2 flex-row justify-between pl-1">
              <Card className="h-full w-full" >
                <PollenView />
              </Card>
            </View>
          </View>
        </View>
      </View>
      <View className="absolute -bottom-4 right-0 aspect-square h-20 rounded-full border-2 bg-black opacity-80">
        <Button
          title=""
          className="aspect-square h-full w-full rounded-full"
          onPress={() => router.replace('/MessageScreen')}
        />
      </View>
    </ScrollView>
  );
};
