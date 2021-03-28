import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useHeaderHeight } from "@react-navigation/stack";
import theme from "./theme";
import IconButton from "./button";
import { useNotes } from "../context/noteprovider";
import NoteInput from "../containers/noteinput";
import { styles } from "./style/notedetail.style";

type Props = {
  ms: any;
  property: any;
  title: any;
  description: any;
  time: any;
  n:any;
}

const LastUpdated = ({ms}:Props) => {
  const date = new Date(ms);
  const second = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const day = date.getDate();
  const month = date.getMonth() + 1; // since it's a zero based index format, e.g. 0 is january
  const year = date.getFullYear();

  return `${month}/${day}/${year} - ${hour}:${minutes}:${second}`;
};

const NoteDetail = ({property}:Props) => {
  const { setNotes } = useNotes();
  const [note, setNote] = useState(property.route.params.note);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);
    const newNotes = notes.filter(({n}:Props) => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    property.navigation.goBack();
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

  const handleUpdate = async ({title, description, time}:Props) => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(({n}:Props) => {
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
      contentContainerStyle={[
        styles.container,
        { paddingTop: useHeaderHeight() },
      ]}
    >
      <Text style={styles.date}>
        {note.isUpdated
          ? `Last Updated ${LastUpdated(note.time)}`
          : `Created At ${LastUpdated(note.time)}`}
      </Text>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
      <View style={styles.buttonContainer}>
        <IconButton
          antIconName="delete"
          style={{ backgroundColor: theme.error, marginBottom: 15 }}
          onPress={displayDeleteAlert}
        />
        <IconButton antIconName="edit" onPress={openEditModal}/>
      </View>
      <NoteInput
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
