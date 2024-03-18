import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Result from '../components/Result';

const SearchScreen = ({ navigation }) => {
  const searchData = [
    { id: '1', name: 'Resultado 1', user: 'John Lennon', photo: require('../assets/images/Jhon.jpeg'), rectangleImage : require('../assets/images/AbbeyRoad2.jpg'), title: 'Abbey Road (Album)', year: '1969', genre: 'Rock', time: '5d'},
    { id: '2', name: 'Resultado 2', user: 'Christopher Martin', photo: require('../assets/images/Chris.jpg'), rectangleImage : require('../assets/images/fix.jpg'), title: 'Fix You', year: '2005', genre: 'Rock', time: '14h' },
    { id: '3', name: 'Resultado 3', user: 'Billie Armstrong', photo: require('../assets/images/Billie.jpg'),  rectangleImage : require('../assets/images/Boulevard.jpg'), title: 'Boulevard of Broken Dr...', year: '2004', genre: 'Rock', time: '21h' },
    { id: '4', name: 'Resultado 4', user: 'Brandon Flowers', photo: require('../assets/images/Brandon.jpeg'), rectangleImage : require('../assets/images/shot.jpg'), title: 'Shot at the Night', year: '2013', genre: 'Rock', time: '8d' },
  ];

  const navigateToUserScreen = (user) => {
    let userScreenName;
    switch (user) {
      case 'John Lennon':
        userScreenName = 'User';
        break;
      case 'Christopher Martin':
        userScreenName = 'User3';
        break;
      default:
        userScreenName = 'UserDefault';
    }
  
    navigation.navigate(userScreenName);
  };

  const renderItem = ({ item }) => (
    <Result
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