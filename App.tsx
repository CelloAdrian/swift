import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigator from "./src/components/BottomTabNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <BottomTabNavigator />
    </SafeAreaProvider>
  );
}
