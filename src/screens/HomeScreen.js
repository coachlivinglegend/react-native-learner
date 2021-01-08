import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const {navigate} = props.navigation;
  console.log(navigate)
  return (
    <View>
      <Text style={styles.text}>A small step for man, a giant leap for mankind.</Text>
      <Button onPress={() => navigate('Components')} title="Go to Components Demo"/>
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
          <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button onPress={() => navigate('Image')} title="Go to Images Demo"/>

    </View>
    
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: "red",
    textAlign: "center",
  }
});

export default HomeScreen;

