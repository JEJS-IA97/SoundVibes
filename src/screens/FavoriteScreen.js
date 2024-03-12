import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const FavoritesScreen = ({ navigation }) => {
  const favoritesData = [
    { image: 'url_imagen_fav_1', title: 'Favorito 1' },
    { image: 'url_imagen_fav_2', title: 'Favorito 2' },
    { image: 'url_imagen_fav_3', title: 'Favorito 3' },
    { image: 'url_imagen_fav_4', title: 'Favorito 4' },
    { image: 'url_imagen_fav_5', title: 'Favorito 5' },
    { image: 'url_imagen_fav_6', title: 'Favorito 6' },
    { image: 'url_imagen_fav_7', title: 'Favorito 7' },
    { image: 'url_imagen_fav_8', title: 'Favorito 8' },
    { image: 'url_imagen_fav_9', title: 'Favorito 9' },
    { image: 'url_imagen_fav_10', title: 'Favorito 10' },
    { image: 'url_imagen_fav_11', title: 'Favorito 11' },
    { image: 'url_imagen_fav_12', title: 'Favorito 12' },
    { image: 'url_imagen_fav_13', title: 'Favorito 13' },
    { image: 'url_imagen_fav_14', title: 'Favorito 14' },
    { image: 'url_imagen_fav_15', title: 'Favorito 15' },

  ];

  const renderThumbnail = ({ item }) => (
    <TouchableOpacity style={styles.thumbnailContainer}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <FlatList
        data={favoritesData}
        renderItem={renderThumbnail}
        keyExtractor={(item) => item.title}
        numColumns={3} 
      />
      <BottomBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  thumbnailContainer: {
    flex: 1,
    aspectRatio: 1, 
    margin: 5,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
