import { StyleSheet } from "react-native";
import theme from "../../components/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: theme.primary,
    fontSize: 20,
    color: theme.light,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  description: {
    height: 100,
  },
  boxbg: {
    flex: 1,
    zIndex: -1,
    backgroundColor: theme.dark_bg,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});
