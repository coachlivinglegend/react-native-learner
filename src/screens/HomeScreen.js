import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>A small step for man, a giant leap for mankind.</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "red",
    textAlign: "center",
  }
});

export default HomeScreen;

