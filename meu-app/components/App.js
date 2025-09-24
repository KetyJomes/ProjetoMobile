import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./Header";
import Card from "./Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Card
          nome="Ketlyn"
          descricao="Adoro desenhar e assistir séries"
          imagem="https://picsum.photos/200/300"
        />
        <Card
          nome="Sofia"
          descricao="Curto esportes e música"
          imagem="https://picsum.photos/200/301"
        />
      </ScrollView>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 80, 
  },
  footer: {
    height: 100,          
    backgroundColor: "#00838f", 
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
