import { StyleSheet } from "react-native";
import theme from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.dark_bg,
  },
  title: {
    fontSize: 30,
    color: theme.primary,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  description: {
    fontSize: 20,
    color: theme.light,
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
  },
  buttonContainer: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});
