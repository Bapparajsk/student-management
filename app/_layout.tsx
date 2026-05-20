
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//@ts-ignore
import '../global.css';

import FontProvider from '@/provider/Font';
import {
  DarkTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Stack } from 'expo-router';
import { HeroUINativeProvider } from 'heroui-native/provider';
import { Uniwind } from "uniwind";

export default function Layout() {

  Uniwind.setTheme("dark");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <FontProvider>
          <HeroUINativeProvider
            config={{
              devInfo: { stylingPrinciples: false },

            }}
          >
            <ThemeProvider value={DarkTheme}>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="(tab)" />
              </Stack>
            </ThemeProvider>
          </HeroUINativeProvider>
        </FontProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


