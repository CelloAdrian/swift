// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

export default Note;
