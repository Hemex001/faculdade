import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f",
    padding: 50,
  },
})

export default function RootLayout() {

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ScrollView>
      <Header title="Home Screen" subtitle="First Screen"></Header>
    </ScrollView>
  );
}

