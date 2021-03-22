import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: theme.text_color,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
    color: theme.text_color,
  },
  container: {
    paddingHorizontal: 20,
  },
});

const SearchBar = ({ containerStyle }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Find something..."
        placeholderTextColor={theme.text_color}
      />
    </View>
  );
};

export default SearchBar;
