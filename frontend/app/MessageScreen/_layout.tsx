import { Stack, router } from 'expo-router';
import React from 'react';

import { Button } from '~/components/Button';
import { ArrowLeft } from '~/lib/icons/ArrowLeft';

export default function MessageScreenLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: 'Chat',
        headerLeft: (props) => {
          return (
            <Button className="h-5" onPress={() => router.back()}>
              <ArrowLeft />
            </Button>
          );
        },
      }}
    />
  );
}
