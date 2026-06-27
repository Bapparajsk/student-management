
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//@ts-ignore
import '../global.css';

import FontProvider from '@/provider/Font';
import {
  DarkTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Stack } from 'expo-router';
import { HeroUINativeProvider, ToastProvider } from 'heroui-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { Uniwind } from "uniwind";

Uniwind.setTheme("dark");

const heroUiConfig = {
  devInfo: { stylingPrinciples: false }
}

export default function Layout() {

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <KeyboardProvider>
        <HeroUINativeProvider config={heroUiConfig}>
          <FontProvider>
            <ThemeProvider value={DarkTheme}>
              <ToastProvider>
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
                  <Stack.Screen name="setting" />
                  <Stack.Screen name="study" />
                  <Stack.Screen name="subject" />
                  <Stack.Screen name="quiz_game" />
                </Stack>
              </ToastProvider>
            </ThemeProvider>
          </FontProvider>
        </HeroUINativeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}


