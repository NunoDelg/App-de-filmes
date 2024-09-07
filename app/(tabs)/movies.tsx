import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function MoviesScreen() {
  return (
    <Link href="/favourites" asChild>
      <Pressable>
        <Text>Movies</Text>
      </Pressable>
    </Link>
  );
}