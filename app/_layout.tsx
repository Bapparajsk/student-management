
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//@ts-ignore
import '../global.css';

import FontProvider from '@/provider/Font';
import {
  DarkTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Stack } from 'expo-router';
import { HeroUINativeProvider } from 'heroui-native';
import { Uniwind } from "uniwind";

Uniwind.setTheme("dark");

export default function Layout() {

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
        <FontProvider>
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
              <Stack.Screen name="subject" />
            </Stack>
          </ThemeProvider>
        </FontProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}


