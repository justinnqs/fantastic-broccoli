import { ScrollView, View } from 'react-native';

import { Card, CardContent, CardFooter, CardTitle } from './ui/card';

export const AllergenView = () => {
  return (
    <ScrollView horizontal>
      <View className="flex mt-2 flex-row gap-2">
        <Card className="w-36 h-36">
          <CardTitle className="p-2">Pollen</CardTitle>
          <CardContent className="w36 h-16" />
          <CardFooter className="mx-2 rounded-lg bg-green-500" />
        </Card>
        <Card className="w-36 h-36">
          <CardTitle className="p-2">Dust</CardTitle>
          <CardContent className="w-36 h-16" />
          <CardFooter className="bg-yellow-500 mx-2 rounded-lg" />
        </Card>
        <Card className="w-36 h-36">
          <CardTitle className="p-2">Tree Pollen</CardTitle>
          <CardContent className="w-36 h-16" />
          <CardFooter className="bg-red-500 mx-2 rounded-lg" />
        </Card>
        <Card className="w-36 h-36">
          <CardTitle className="p-2">Tree Pollen</CardTitle>
          <CardContent className="w-36 h-16" />
          <CardFooter className="bg-red-500 mx-2 rounded-lg" />
        </Card>
      </View>
    </ScrollView>
  );
};
