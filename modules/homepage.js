import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import SearchBar from "./components/searchbar";
import theme from "./components/theme";
import IconButton from "./components/iconbutton";
import NoteInput from "./noteinput";
import Notes from "./components/notebox";

// TODO: dynamic font sizes, by pixel ratio or phone dimensions
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    zIndex: 1,
    backgroundColor: theme.dark_bg,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: theme.title_color,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  addButton: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});

const Homepage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem("notes");
    console.log(result);
    if (result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findNotes();
  }, []);

  const handleOnSubmit = async (title, description) => {
    const note = { id: Date.now(), title, description, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const openNote = (note) => {
    navigation.navigate("NoteDetail", { note });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.text_color} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>Notes</Text>
          {notes.length ? (
            <SearchBar containerStyle={{ marginVertical: 15 }} />
          ) : null}
          <FlatList
            data={notes}
            numColumns={1}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Notes onPress={() => openNote(item)} item={item} />
            )}
          />
          {!notes.length ? (
            <View
              style={[StyleSheet.absoluteFill, styles.emptyHeaderContainer]}
            >
              <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <IconButton
        onPress={() => setModalVisible(true)}
        antIconName="plus"
        style={styles.addButton}
      />
      <NoteInput
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default Homepage;
