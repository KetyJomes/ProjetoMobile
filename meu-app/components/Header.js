import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Meu App de Apresentação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00838f",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
