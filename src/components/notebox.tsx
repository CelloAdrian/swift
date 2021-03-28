import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style/notebox.style";

type Props = {
  item: any;
  onPress: any;
}

const Note = ({ item, onPress }: Props) => {
  const { title, description } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default Note;
