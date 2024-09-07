import React from 'react';
import { SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen({  }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App de Filmes!</Text>
      <Text style={styles.subtitle}>
        Explore os filmes mais populares, pesquise seus favoritos e salve-os para assistir depois.
      </Text>
      <Link href="/search" asChild>
      <Pressable style={styles.button}>
        <Text>Pesquisar filmes</Text>
      </Pressable>
    </Link>
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
  button: {
    backgroundColor: 'lime',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  }
});
