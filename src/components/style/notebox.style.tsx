import { StyleSheet, Dimensions } from "react-native";
import theme from '../theme'

export const styles = StyleSheet.create({
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
