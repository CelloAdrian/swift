import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.container_bg,
    width: Dimensions.get("window").width - 40,
    padding: 8,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: theme.title_color,
  },
  description: {
    color: theme.text_color,
  },
});

const Note = ({ item, onPress }) => {
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
