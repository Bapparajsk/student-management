
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
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <SafeAreaProvider>
        <FontProvider>
          <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
            <ThemeProvider value={DarkTheme}>
              <Stack
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                  contentStyle: {
                    backgroundColor: "#000",
                  },
                }}
              >
                <Stack.Screen name="(tab)" />
                <Stack.Screen name="study" />
              </Stack>
            </ThemeProvider>
          </HeroUINativeProvider>
        </FontProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


