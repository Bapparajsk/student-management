
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//@ts-ignore
import '../global.css';

import { ThemeProvider } from "@react-navigation/native";

import { useThemeStore } from '@/store/theme-store';
import { Stack } from 'expo-router';
import { HeroUINativeProvider } from 'heroui-native/provider';

export default function Layout() {

  const navigationTheme =
    useThemeStore(
      state =>
        state.navigationTheme
    );
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <HeroUINativeProvider>
          <ThemeProvider value={navigationTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="(tab)" />
            </Stack>
          </ThemeProvider>
        </HeroUINativeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


