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
import { useNotes } from "./context/noteprovider";

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
    zIndex: 1,
  },
});

const reverseData = data => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time)
    const bInt = parseInt(b.time)
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  })
}

const Homepage = ({ navigation }) => {
  const { notes, setNotes, findNotes } = useNotes();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false)

  useEffect(() => { }, []);

  const handleOnSubmit = async (title, description) => {
    const note = { id: Date.now(), title, description, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const reverseNotes = reverseData(notes)

  const openNote = (note) => {
    navigation.navigate("NoteDetail", { note });
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery('')
      setResultNotFound(false)
      return await findNotes()
    }
    const filteredNotes = notes.filter((note) => {
      if (note.title.toLowerCase().includes(text.toLowerCase)) {
        return note;
      }
    });
    if (filteredNotes.length) {
      setNotes([...filteredNotes]);
    } else {
      setResultNotFound(true)
    }
  };

  const handleOnClear = async () => {
    setSearchQuery('')
    setResultNotFound(false)
    await findNotes()
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.text_color} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>Notes</Text>
          {notes.length ? (
            <SearchBar
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              containerStyle={{ marginVertical: 15 }}
              onClear={handleOnClear}
            />
          ) : null}
          {resultNotFound ? <NotFound /> :
            <FlatList
              data={reverseNotes}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Notes onPress={() => openNote(item)} item={item} />
              )}
            />}
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
