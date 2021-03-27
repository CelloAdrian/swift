// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { View, StyleSheet, TextInput } from "react-native";
import theme from "./theme";
import {AntDesign} from '@expo/vector-icons'

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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  clearIcon: {
    position: 'absolute',
    right: 10
  }
});

const SearchBar = ({ containerStyle, value, onChangeText }) => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Find something..."
        placeholderTextColor={theme.text_color}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {value ? (<AntDesign name='close' size={20} color={theme.primary} style={styles.clearIcon}/>) : null}
    </View>
  );
};

export default SearchBar;
