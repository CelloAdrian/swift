import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./src/homepage";
import NoteDetail from "./src/components/notedetail";
import NoteProvider from "./src/context/noteprovider";
import theme from "./src/components/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.dark_bg,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: "", headerTransparent: true }}
        >
          <Stack.Screen component={Homepage} name="Homepage" />
          <Stack.Screen component={NoteDetail} name="NoteDetail" />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}
