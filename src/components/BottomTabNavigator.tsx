import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParams } from "../utils/types";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "../containers/Homepage";
import NoteInput from "../containers/NoteInput";
import ComingSoon from "./ComingSoon"

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{ showLabel: false, activeTintColor: "#9F9FA0" }}
      >
        <Tab.Screen
          name="Voice"
          component={ComingSoon}
          options={{
            tabBarLabel: "Voice",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="mic-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="compass-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Note"
          component={NoteInput}
          options={{
            tabBarLabel: "Note",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="clipboard-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
