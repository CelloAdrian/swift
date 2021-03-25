import React from "react";
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
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Find something..."
        placeholderTextColor={theme.text_color}
      />
      {value ? (<AntDesign name='close' size={20} color={theme.primary} style={styles.clearIcon}/>) : null}
    </View>
  );
};

export default SearchBar;
