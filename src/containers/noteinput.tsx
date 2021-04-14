import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default function NoteInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Input Title" placeholderTextColor={Colors.dark.placeholdertext}/>
      <TextInput multiline placeholderTextColor={Colors.dark.placeholdertext}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
})
