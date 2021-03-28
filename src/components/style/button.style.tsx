import { StyleSheet } from "react-native";
import theme from '../theme'

export const styles = StyleSheet.create({
  icon: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 50,
    elevation: 5, // might need to use other shadow properties as this might not work properly on iOS
  },
});
