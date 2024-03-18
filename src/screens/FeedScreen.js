import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../components/Feed';

const FeedScreen = ({ navigation }) => {
  const feedData = [
    { id: '1', name: 'Post 1', user: 'John Lennon', photo: require('../assets/images/Jhon.jpeg'), rectangleImage : require('../assets/images/AbbeyRoad2.jpg'), title: 'Abbey Road (Album)', year: '1969', genre: 'Rock', time: '5d'},
    { id: '2', name: 'Post 2', user: 'Ariana Grande', photo: require('../assets/images/ariana.png'), rectangleImage : require('../assets/images/eternal.jpg'), title: 'Eternal Sunshine', year: '2024', genre: 'Pop', time: '14h' },
    { id: '3', name: 'Post 3', user: 'Taylor Swift', photo: require('../assets/images/Taylor.jpg'),  rectangleImage : require('../assets/images/midnights.jpg'), title: 'Midnights', year: '2022', genre: 'Pop', time: '21h' },
    { id: '4', name: 'Post 4', user: 'Harry Styles', photo: require('../assets/images/Harry.jpg'), rectangleImage : require('../assets/images/harrys.jpg'), title: `Harry's House`, year: '2022', genre: 'Pop', time: '8d' },
  ];

  const navigateToUserScreen = (user) => {
    let userScreenName;
    switch (user) {
      case 'John Lennon':
        userScreenName = 'User';
        break;
      case 'Taylor Swift':
        userScreenName = 'User3';
        break;
      default:
        userScreenName = 'UserDefault';
    }
  
    navigation.navigate(userScreenName);
  };

  const renderItem = ({ item }) => (
    <Feed
      title={item.title}
      year={item.year}
      genre={item.genre}
      user={item.user}
      photo={item.photo}
      rectangleImage={item.rectangleImage}
      time={item.time}
      onPress={() => navigateToUserScreen(item.user)}
    />
  );

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 69, 0, 0.3)']} style={styles.container}>
      <TopBar navigation={navigation}/>
      <View style={styles.container}>
        <FlatList
          data={feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  feedItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default FeedScreen;