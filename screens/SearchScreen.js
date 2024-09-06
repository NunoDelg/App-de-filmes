import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { fetchMovies } from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    navigation.navigate('Results', { results });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar por filme..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
