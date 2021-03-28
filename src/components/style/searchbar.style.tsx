import { StyleSheet } from "react-native";
import theme from "../theme";

export const styles = StyleSheet.create({
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
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  clearIcon: {
    position: "absolute",
    right: 10,
  },
});
