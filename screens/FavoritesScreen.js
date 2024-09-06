import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FavoritesContext } from "../contexts/FavoritesContext";

export default function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.title}>{item.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
});
