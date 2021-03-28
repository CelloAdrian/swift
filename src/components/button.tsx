import React from "react";
import { AntDesign } from "@expo/vector-icons";
import theme from "./theme";
import { styles } from "./style/button.style";

type Props = {
  antIconName: any;
  size: any;
  color: any;
  style: any;
  onPress: any;
}

const IconButton = ({ antIconName, size, color, style, onPress }: Props) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || theme.light}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

export default IconButton;
