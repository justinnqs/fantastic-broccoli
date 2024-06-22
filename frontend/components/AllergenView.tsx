import { ScrollView, View } from 'react-native';

import { Card, CardContent, CardFooter, CardTitle } from './ui/card';

export const AllergenView = () => {
  return (
    <ScrollView horizontal>
      <View className="mt-2 flex flex-row gap-2">
        <Card className="h-36 w-36">
          <CardTitle className="p-2">Pollen</CardTitle>
          <CardContent className="w36 h-16" />
          <CardFooter className="mx-2 rounded-lg bg-green-500" />
        </Card>
        <Card className="h-36 w-36">
          <CardTitle className="p-2">Dust</CardTitle>
          <CardContent className="h-16 w-36" />
          <CardFooter className="mx-2 rounded-lg bg-yellow-500" />
        </Card>
        <Card className="h-36 w-36">
          <CardTitle className="p-2">Tree Pollen</CardTitle>
          <CardContent className="h-16 w-36" />
          <CardFooter className="mx-2 rounded-lg bg-red-500" />
        </Card>
        <Card className="h-36 w-36">
          <CardTitle className="p-2">Tree Pollen</CardTitle>
          <CardContent className="h-16 w-36" />
          <CardFooter className="mx-2 rounded-lg bg-red-500" />
        </Card>
      </View>
    </ScrollView>
  );
};
