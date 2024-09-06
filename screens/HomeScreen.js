import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App de Filmes!</Text>
      <Text style={styles.subtitle}>
        Explore os filmes mais populares, pesquise seus favoritos e salve-os para assistir depois.
      </Text>
      <Button
        title="Pesquisar Filmes"
        onPress={() => navigation.navigate('Search')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
