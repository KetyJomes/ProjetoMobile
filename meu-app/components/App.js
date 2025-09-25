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
          imagem={require("./IMG_1714.jpeg")}
        />
        <Card
          nome="Sofia"
          descricao="Curto esportes e música"
          imagem={require("./IMG_4060.jpeg")}
        />
      </ScrollView>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4e1",
  },
  content: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 80, 
  },
  footer: {
    height: 150,          
    backgroundColor: "#ffbba8", 
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
