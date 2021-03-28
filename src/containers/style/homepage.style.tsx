import {StyleSheet} from 'react-native'
import theme from '../../components/theme'

// TODO: dynamic font sizes by phone dimensions
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    zIndex: 1,
    backgroundColor: theme.dark_bg,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: theme.title_color,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  addButton: {
    position: "absolute",
    right: 15,
    bottom: 50,
    zIndex: 1,
  },
});