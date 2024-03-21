import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Result from '../components/Result';

const SearchScreen = ({ navigation }) => {
  const searchData = [
    { id: '1', 
    name: 'Resultado 1', 
    user: 'John Lennon', 
    profileImage: require('../assets/images/Jhon.jpeg'), 
    description: '"Abbey Road" is more than an album; it is a musical journey that trascends time.',
    image : require('../assets/images/AbbeyRoad2.jpg'), 
    title: 'Abbey Road (Album)', 
    year: '1969', 
    genre: 'Rock', 
    time: '5d'},

    { id: '2',
    name: 'Resultado 2', 
    user: 'Christopher Martin', 
    profileImage: require('../assets/images/Chris.jpg'), 
    description: 'It conveys a message of hope and comfort in difficult times. The song offers a comforting reminder that there is always light at the end of the tunnel. The lyrics, with their invitation to “fix yourself” and “enlighten yourself,” resonate with anyone who has faced challenges or loss in life.',
    image : require('../assets/images/fix.jpg'), 
    title: 'Fix You', 
    year: '2005', 
    genre: 'Rock', 
    time: '14h' },

    { id: '3', 
    name: 'Resultado 3', 
    user: 'Billie Armstrong', 
    profileImage: require('../assets/images/Billie.jpg'),  
    description: 'It is a moving anthem for those who feel lost and alone on their journey through life. The song captures the feeling of alienation and despair.',
    image : require('../assets/images/Boulevard.jpg'), 
    title: 'Boulevard of Broken Dr...', 
    year: '2004', 
    genre: 'Rock', 
    time: '21h' },

    { id: '4', 
    name: 'Resultado 4', 
    user: 'Brandon Flowers', 
    profileImage: require('../assets/images/Brandon.jpeg'), 
    description: '"Shot at the Night" celebrates the excitement of love and adventure. The lyrics, describing a romantic encounter under the city lights, capture the feeling of euphoria and excitement of being in love. It is a song that inspires us to pursue our dreams and live every moment to the fullest.',
    image : require('../assets/images/shot.jpg'), 
    title: 'Shot at the Night', 
    year: '2013', 
    genre: 'Rock', 
    time: '8d' },
  ];

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { post });
  };

  const renderItem = ({ item }) => (
    <Result
      title={item.title}
      year={item.year}
      genre={item.genre}
      user={item.user}
      profileImage={item.profileImage}
      image={item.image}
      time={item.time}
      onPress={() => navigateToPostScreen(item)}
    />
  );

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 69, 0, 0.3)']} style={styles.container}>
      <TopBar navigation={navigation}/>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={20} color="#729FB0" style={styles.searchIcon} />
            <TextInput style={styles.input} placeholder="Search..." />
          </View>
        </View>
        <FlatList
          data={searchData}
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
  searchContainer: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(135, 206, 235, 0.6)',
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    flex: 1,
    color:'#729FB0',
  },
  searchIcon: {
    marginRight: 10,
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default SearchScreen;