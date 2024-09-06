import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchMovieDetails } from '../services/api';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function MovieDetailsScreen({ route }) {
  const { movie } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const details = await fetchMovieDetails(movie.id);
      setMovieDetails(details);
    };
    loadMovieDetails();
  }, [movie]);

  return (
    <View style={styles.container}>
      {movieDetails ? (
        <>
          <Text style={styles.title}>{movieDetails.title}</Text>
          <Text>Descrição: {movieDetails.overview}</Text>
          <Text>Data de lançamento: {movieDetails.release_date}</Text>
          <Button
            title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            onPress={() => isFavorite ? removeFavorite(movie.id) : addFavorite(movie)}
          />
        </>
      ) : (
        <Text>Carregando detalhes...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },
});
