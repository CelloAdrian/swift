import React from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHeaderHeight } from "@react-navigation/stack";
import theme from "./theme";
import IconButton from "./iconbutton";
import { useNotes } from "../context/noteprovider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.dark_bg
  },
  title: {
    fontSize: 30,
    color: theme.primary,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    color: theme.light
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
  },
  buttonContainer: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});

const LastUpdated = (ms) => {
  const date = new Date(ms);
  const second = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth() + 1; // since it's a zero based index format, e.g. 0 is january
  const year = date.getFullYear();

  return `${month}/${day}/${year} - ${hour}:${minutes}:${second}`;
};

const NoteDetail = (props) => {
  const { note } = props.route.params;
  const { setNotes } = useNotes();

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) {
      notes = JSON.parse(result);
    }
    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    props.navigation.goBack();
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      "Are you sure you want to delete this note?",
      "This action cannot be reversed.",
      [{ text: "Delete", onPress: deleteNote }, { text: "Cancel" }],
      {
        cancelable: true,
      }
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: useHeaderHeight() },
      ]}
    >
      <Text style={styles.date}>{LastUpdated(note.time)}</Text>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
      <View style={styles.buttonContainer}>
        <IconButton
          antIconName="delete"
          style={{ backgroundColor: theme.error, marginBottom: 15 }}
          onPress={displayDeleteAlert}
        />
        <IconButton antIconName="edit" />
      </View>
    </ScrollView>
  );
};

export default NoteDetail;
