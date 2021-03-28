import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "./theme";
import { styles } from "./style/notfound.style";

const TextComponent: any = Text; // stupid fucking retarded ts issue

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AntDesign name="frowno" size={90} color={theme.light} />
      <TextComponent style={styles}>Result Not Found</TextComponent>
    </View>
  );
};

export default NotFound;
