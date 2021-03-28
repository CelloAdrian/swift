import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import theme from "@components/theme";
import IconButton from "@components/button";
import { styles } from "./style/noteinput.style";

interface Props {
  visible: any;
  onClose: any;
  onSubmit: any;
  note: any;
  isEdit: any;
  text: any;
  valueFor: any;
}

const NoteInput = ({ visible, onClose, onSubmit, note, isEdit }:Props) => {
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

  const handleOnChangeText = ({text, valueFor}:Props) => {
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
      <StatusBar hidden />
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <TextInput
            placeholder="Title"
            value={title}
            style={[styles.input, styles.title]}
            placeholderTextColor={theme.text_color}
            onChangeText={(text) => handleOnChangeText(text, "title")}
          />
          <TextInput
            placeholder="Note"
            value={description}
            multiline
            style={[styles.input, styles.description]}
            placeholderTextColor={theme.text_color}
            onChangeText={(text) => handleOnChangeText(text, "description")}
          />
          <View style={styles.buttonContainer}>
            <IconButton size={15} antIconName="check" onPress={handleSubmit} />
            {title.trim() || description.trim() ? (
              <IconButton
                size={15}
                style={{ marginLeft: 15 }}
                antIconName="close"
                onPress={closeBox}
              />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleBoxClose}>
          <View style={[StyleSheet.absoluteFillObject, styles.boxbg]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInput;
