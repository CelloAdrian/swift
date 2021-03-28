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
import SearchBar from "@components/searchbar";
import theme from "@components/theme";
import IconButton from "@components/button";
import NoteInput from "./noteinput";
import Notes from "@components/notebox";
import NotFound from "@components/notfound";
import { useNotes } from "@context/noteprovider";
import { styles } from "./style/homepage.style";

interface Props {
  data: any;
  a: any;
  b: any;
  navigation: any;
  title: any;
  description: any;
  note: any;
  text: any;
}

const reverseData = ({data}:Props) => {
  return data.sort(({a}:Props, {b}:Props) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};

const Homepage = ({ navigation }:Props) => {
  const { notes, setNotes, findNotes } = useNotes();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false);

  useEffect(() => {}, []);

  const handleOnSubmit = async ({title, description}:Props) => {
    const note = { id: Date.now(), title, description, time: Date.now() };
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const reverseNotes = reverseData(notes);

  const openNote = ({note}:Props) => {
    navigation.navigate("NoteDetail", { note });
  };

  const handleOnSearchInput = async ({text}:Props) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setSearchQuery("");
      setResultNotFound(false);
      return await findNotes();
    }
    const filteredNotes = notes.filter(({note}:Props) => {
      if (note.title.toLowerCase().includes(text.toLowerCase)) {
        return note;
      }
    });
    if (filteredNotes.length) {
      setNotes([...filteredNotes]);
    } else {
      setResultNotFound(true);
    }
  };

  const handleOnClear = async () => {
    setSearchQuery("");
    setResultNotFound(false);
    await findNotes();
  };

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
          {resultNotFound ? (
            <NotFound />
          ) : (
            <FlatList
              data={reverseNotes}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Notes onPress={() => openNote(item)} item={item} />
              )}
            />
          )}
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
