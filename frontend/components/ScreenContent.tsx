import { Link, router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { Button } from './Button';
import { LineGraph } from './LineGraphGiftedCharts';
import PollenView from './PollenView';
import { Avatar } from './ui/avatar';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { H1 } from './ui/typography';

import MessageScreen from '~/app/MessageScreen';
import { MessageSquare } from '~/lib/icons/MessageSquare';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <>
      <MessageScreen />
      <ScrollView className="flex flex-1 p-4">
        <View className="flex-1 gap-4">
          <View className="mb-10 flex-row border-t border-gray-300 p-3" />
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
            <View className="h-80 w-full flex-row justify-between">
              <LineGraph />
            </View>
            <View className="h-80 w-full flex-row justify-between">
              <PollenView />
            </View>
            <View className="w-full flex-row">
              <View className="w-1/2 flex-row justify-between pr-1">
                <Card className="h-full w-full" />
              </View>
              <View className="w-1/2 flex-col pl-1">
                <View className="h-56 w-full flex-row pb-2">
                  <Card className="h-full w-full" />
                </View>
                <View className="h-56 w-full flex-row">
                  <Card className="h-full w-full" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="absolute bottom-5 right-6 aspect-square h-24 rounded-full border-2 opacity-80">
          <Button
            title=""
            className="flex aspect-square h-full w-full items-center justify-center rounded-full bg-slate-500"
            onPress={() => router.navigate('/MessageScreen')}>
            <MessageSquare color="black" height={55} className="aspect-square" />
          </Button>
        </View>
      </ScrollView>
    </>
  );
};
