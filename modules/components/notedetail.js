import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

const styles = StyleSheet.create({
  container: {},
});

const NoteDetail = (props) => {
  const { note } = props.route.params;

  return (
    <View style={[styles.container, { paddingTop: useHeaderHeight() }]}>
      <Text>{note.title}</Text>
      <Text>{note.description}</Text>
    </View>
  );
};

export default NoteDetail;
