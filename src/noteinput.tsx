// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from "react-native";
import theme from "./components/theme";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/iconbutton' was resolved to '... Remove this comment to see the full error message
import IconButton from "./components/iconbutton";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: theme.primary,
    fontSize: 20,
    color: theme.light,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  description: {
    height: 100,
  },
  boxbg: {
    flex: 1,
    zIndex: -1,
    backgroundColor: theme.dark_bg,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

const NoteInput = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleBoxClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "description") setDescription(text);
  };

  const handleSubmit = () => {
    if (!title.trim() && !description.trim()) return onClose();

    if (isEdit) {
      onSubmit(title, description, Date.now());
    } else {
      onSubmit(title, description);
      setTitle("");
      setDescription("");
    }
    onClose();
  };

  const closeBox = () => {
    if (!isEdit) {
      setTitle("");
      setDescription("");
    }
    onClose();
  };

  return (
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StatusBar hidden />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Modal visible={visible} animationType="slide">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <View style={styles.container}>
          <TextInput
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            placeholder="Title"
            value={title}
            style={[styles.input, styles.title]}
            placeholderTextColor={theme.text_color}
            onChangeText={(text) => handleOnChangeText(text, "title")}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TextInput
            placeholder="Note"
            value={description}
            multiline
            style={[styles.input, styles.description]}
            placeholderTextColor={theme.text_color}
            onChangeText={(text) => handleOnChangeText(text, "description")}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.buttonContainer}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <IconButton size={15} antIconName="check" onPress={handleSubmit} />
            {title.trim() || description.trim() ? (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <IconButton
                size={15}
                style={{ marginLeft: 15 }}
                antIconName="close"
                onPress={closeBox}
              />
            ) : null}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </View>
        </View>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TouchableWithoutFeedback onPress={handleBoxClose}>
          <View style={[StyleSheet.absoluteFillObject, styles.boxbg]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInput;
