import '~/global.css';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, View } from 'react-native';

import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import { NAV_THEME } from '~/lib/constants';
import { ArrowLeft } from '~/lib/icons/ArrowLeft';
import { Bell } from '~/lib/icons/Bell';
import { User } from '~/lib/icons/User';
import { useColorScheme } from '~/lib/useColorScheme';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      console.log(theme);
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          header: (props) => {
            return (
              <View className="flex flex-col gap-2">
                <View className="flex flex-row mt-20 bg-transparent space-y-1 justify-between">
                  <View className="flex flex-row gap-2 pl-2 h-7">
                    <Button variant="secondary" className="w-[45px] h-1.5 rounded-full">
                      <ArrowLeft />
                    </Button>
                  </View>
                  <View className="flex flex-row gap-2 pr-2">
                    <Button variant="secondary" className="w-[45px] h-1.5 rounded-full">
                      <Bell />
                    </Button>
                    <Button variant="secondary" className="w-[45px] h-1.5 rounded-full">
                      <User />
                    </Button>
                  </View>
                </View>
                <Separator />
              </View>
            );
          },
        }}
      />
    </ThemeProvider>
  );
}
