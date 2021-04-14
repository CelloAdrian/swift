import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function Homepage() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
          <Text>Bruh moment</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})
