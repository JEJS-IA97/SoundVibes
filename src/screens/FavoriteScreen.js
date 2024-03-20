import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';

const FavoritesScreen = ({ navigation }) => {
  const favoritesData = [
    { id: 1, image: require('../assets/images/1.jpg') },
    { id: 2, image: require('../assets/images/2.jpg') },
    { id: 3, image: require('../assets/images/3.jpg') },
    { id: 4, image: require('../assets/images/4.jpg') },
    { id: 5, image: require('../assets/images/5.jpg') },
    { id: 6, image: require('../assets/images/6.jpg') },
    { id: 7, image: require('../assets/images/7.jpg') },
    { id: 8, image: require('../assets/images/8.jpg') },
    { id: 9, image: require('../assets/images/9.jpg') },
    { id: 10, image: require('../assets/images/10.png') },
    { id: 11, image: require('../assets/images/11.jpg') },
    { id: 12, image: require('../assets/images/12.jpg') },
    { id: 13, image: require('../assets/images/13.jpg') },
    { id: 14, image: require('../assets/images/14.jpg') },
    { id: 15, image: require('../assets/images/15.jpg') },
    { id: 16, image: require('../assets/images/16.jpg') },
    { id: 17, image: require('../assets/images/17.jpg') },
    { id: 18, image: require('../assets/images/18.jpg') },
    { id: 19, image: require('../assets/images/19.jpg') },
    { id: 20, image: require('../assets/images/20.jpg') },
    { id: 21, image: require('../assets/images/21.png') },
    { id: 22, image: require('../assets/images/22.jpg') },
    { id: 23, image: require('../assets/images/23.jpg') },
    { id: 24, image: require('../assets/images/24.jpg') },
  ];

  const goToPostDetail = (post) => {
    navigation.navigate('PostScreen', { post });
  };

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']} style={styles.container}>
    <TopBar navigation={navigation}/>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.postsContainer}>
          {favoritesData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.postItem} onPress={() => goToPostDetail(item)}>
              <Image source={item.image} style={styles.postImage} />
            </TouchableOpacity>
          ))}
        </View>
        </View>
    </ScrollView> 
    <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 16,
    marginTop:16,
  },
  postItem: {
    width: '32%',
    aspectRatio: 1,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default FavoritesScreen;