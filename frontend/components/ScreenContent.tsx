import { ScrollView, View } from 'react-native';

import { AllergenView } from './AllergenView';
import { Separator } from './ui/separator';
import { H1 } from './ui/typography';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 p-4">
      <ScrollView className="flex">
        <View className="flex flex-col gap-3">
          <View className="flex flex-col gap-2">
            <H1 className="mb-2">Hello,</H1>
            <H1 className="mb-2">Justin Sian</H1>
          </View>
          <Separator />
          <AllergenView />
        </View>
      </ScrollView>
    </View>
  );
};
