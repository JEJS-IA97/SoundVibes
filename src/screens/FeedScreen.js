import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../components/Feed';

const FeedScreen = ({ navigation }) => {
  const feedData = [
    { id: '1', 
    name: 'Post 1', 
    user: 'John Lennon', 
    photo: require('../assets/images/Jhon.jpeg'), 
    description: '"Abbey Road" is more than an album; it is a musical journey that trascends time.', 
    rectangleImage : require('../assets/images/AbbeyRoad2.jpg'), 
    title: 'Abbey Road (Album)', 
    year: '1969', 
    genre: 'Rock', 
    time: '5d'},
    { id: '2', 
    name: 'Post 2', 
    user: 'Ariana Grande', 
    photo: require('../assets/images/ariana.png'), 
    description: '˚❀*·ꕤ. eternal sunshine out now ｡˚❀*·ꕤ.',
    rectangleImage : require('../assets/images/eternal.jpg'), 
    title: 'Eternal Sunshine', 
    year: '2024', 
    genre: 'Pop', 
    time: '10h' },
    { id: '3', 
    name: 'Post 3', 
    user: 'Taylor Swift', 
    photo: require('../assets/images/Taylor.jpg'),  
    description: 'Midnights, the stories of 13 sleepless nights scattered throughout my life.',
    rectangleImage : require('../assets/images/midnights.jpg'), 
    title: 'Midnights', 
    year: '2022', 
    genre: 'Pop', 
    time: '6d' },
    { id: '4', 
    name: 'Post 4', 
    user: 'Harry Styles', 
    photo: require('../assets/images/Harry.jpg'), 
    description: `Two years of Harry's House. I’ve never been happier than making this album, thank you for everything.`,
    rectangleImage : require('../assets/images/harrys.jpg'), 
    title: `Harry's House`, 
    year: '2022', 
    genre: 'Pop', 
    time: '1w' },
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
      description={item.description}
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