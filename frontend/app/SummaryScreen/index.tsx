import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '~/components/ScreenContent';
import { View } from '~/components/primitives/slot';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Home' }} />
      <View className="">
        <ScreenContent path="app/(tabs)/index.tsx" title="Home" />
      </View>
    </>
  );
}
