import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backhgroundColor: "orange" /* Erase Later */,
  },
});

export default FavoritesScreen;
