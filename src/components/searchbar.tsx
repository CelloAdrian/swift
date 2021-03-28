import React from "react";
import { View, TextInput } from "react-native";
import theme from "./theme";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style/searchbar.style";

interface Props {
  containerStyle: any;
  value: any;
  onChangeText: any;
}

const SearchBar = ({ containerStyle, value, onChangeText }:Props) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Find something..."
        placeholderTextColor={theme.text_color}
      />
      {value ? (
        <AntDesign
          name="close"
          size={20}
          color={theme.primary}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

export default SearchBar;
