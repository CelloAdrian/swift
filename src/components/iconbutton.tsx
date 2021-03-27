// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "./theme";

const styles = StyleSheet.create({
  icon: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 50,
    elevation: 5, // might need to use other shadow properties as this might not work properly on iOS
  },
});

const IconButton = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      name={antIconName}
      size={size || 24}
      color={color || theme.light}
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ name: any; size: any; color: any; style: a... Remove this comment to see the full error message
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

export default IconButton;
