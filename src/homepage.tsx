// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from "react-native";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/searchbar' was resolved to 'C... Remove this comment to see the full error message
import SearchBar from "./components/searchbar";
import theme from "./components/theme";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/iconbutton' was resolved to '... Remove this comment to see the full error message
import IconButton from "./components/iconbutton";
// @ts-expect-error ts-migrate(6142) FIXME: Module './noteinput' was resolved to 'C:/Users/cel... Remove this comment to see the full error message
import NoteInput from "./noteinput";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/notebox' was resolved to 'C:/... Remove this comment to see the full error message
import Notes from "./components/notebox";
// @ts-expect-error ts-migrate(6142) FIXME: Module './context/noteprovider' was resolved to 'C... Remove this comment to see the full error message
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StatusBar barStyle="dark-content" backgroundColor={theme.text_color} />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text style={styles.header}>Notes</Text>
          {notes.length ? (
            <SearchBar
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              containerStyle={{ marginVertical: 15 }}
              onClear={handleOnClear}
            />
          ) : null}
          {resultNotFound ? <NotFound /> :
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <FlatList
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              data={reverseNotes}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Notes onPress={() => openNote(item)} item={item} />
              )}
            />}
          {!notes.length ? (
            <View
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              style={[StyleSheet.absoluteFill, styles.emptyHeaderContainer]}
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Text style={styles.emptyHeader}>Add Notes</Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <IconButton
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        onPress={() => setModalVisible(true)}
        antIconName="plus"
        style={styles.addButton}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <NoteInput
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default Homepage;
