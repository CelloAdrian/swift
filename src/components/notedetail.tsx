// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHeaderHeight } from "@react-navigation/stack";
import theme from "./theme";
// @ts-expect-error ts-migrate(6142) FIXME: Module './iconbutton' was resolved to 'C:/Users/ce... Remove this comment to see the full error message
import IconButton from "./iconbutton";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../context/noteprovider' was resolved to '... Remove this comment to see the full error message
import { useNotes } from "../context/noteprovider";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../noteinput' was resolved to 'C:/Users/ce... Remove this comment to see the full error message
import NoteInput from "../noteinput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.dark_bg,
  },
  title: {
    fontSize: 30,
    color: theme.primary,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    color: theme.light,
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
  const { setNotes } = useNotes();
  const [note, setNote] = useState(props.route.params.note);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);
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

  const handleUpdate = async (title, description, time) => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter((n) => {
      if (n.id === note.id) {
        (n.title = title), (n.description = description), (n.time = time);
        n.isUpdated = true;
        setNote(n);
      }
      return n;
    });

    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  return (
    <ScrollView
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      contentContainerStyle={[
        styles.container,
        { paddingTop: useHeaderHeight() },
      ]}
    >
      <Text style={styles.date}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {note.isUpdated
          ? `Last Updated ${LastUpdated(note.time)}`
          : `Created At ${LastUpdated(note.time)}`}
      </Text>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text style={styles.title}>{note.title}</Text>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text style={styles.description}>{note.description}</Text>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.buttonContainer}>
        <IconButton
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          antIconName="delete"
          style={{ backgroundColor: theme.error, marginBottom: 15 }}
          onPress={displayDeleteAlert}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconButton antIconName="edit" onPress={openEditModal} />
      </View>
      <NoteInput
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
      />
    </ScrollView>
  );
};

export default NoteDetail;
