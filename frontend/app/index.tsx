import { Stack } from 'expo-router';

import { ScreenContent } from '~/components/ScreenContent';
import { View } from '~/components/primitives/slot';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View className="">
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
      </View>
    </>
  );
}
