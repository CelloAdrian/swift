import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import theme from "./theme";
import { styles } from "./style/notfound.style";

const NotFound = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AntDesign name="frowno" size={90} color={theme.light} />
      <Text style={styles}>Result Not Found</Text>
    </View>
  );
};

export default NotFound;
