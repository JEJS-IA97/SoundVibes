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
    time: '5d ago',
    spotify: 'https://open.spotify.com/intl-es/album/0ETFjACtuP2ADo6LFhL6HN?si=VQBHGpgvS-m_QUuTPJzHsA',
    youtube: 'https://www.youtube.com/playlist?list=PLiN-7mukU_RE21iD9opzXGPC-VSWfu92Z',
    soundcloud: 'https://soundcloud.com/user-79534953/the-beatles-abbey-road-full-album?si=1ccb676c1ce743439c609fdb9a66f9a8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },

    { id: '2',
    name: 'Resultado 2', 
    user: 'Christopher Martin', 
    profileImage: require('../assets/images/Chris.jpg'), 
    description: 'It conveys a message of hope and comfort in difficult times. The song offers a comforting reminder that there is always light at the end of the tunnel. The lyrics, with their invitation to “fix yourself” and “enlighten yourself,” resonate with anyone who has faced challenges or loss in life.',
    image : require('../assets/images/fix.jpg'), 
    title: 'Fix You', 
    year: '2005', 
    genre: 'Rock', 
    time: '14h ago',
    spotify: 'https://open.spotify.com/intl-es/track/7LVHVU3tWfcxj5aiPFEW4Q?si=d4e9935bcadb43d6',
    youtube: 'https://www.youtube.com/watch?v=k4V3Mo61fJM&ab_channel=Coldplay',
    soundcloud: 'https://soundcloud.com/user-956334953/coldplay-fix-you?si=4558e8602920492dbd648665c3375b60&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },

    { id: '3', 
    name: 'Resultado 3', 
    user: 'Billie Armstrong', 
    profileImage: require('../assets/images/Billie.jpg'),  
    description: 'It is a moving anthem for those who feel lost and alone on their journey through life. The song captures the feeling of alienation and despair.',
    image : require('../assets/images/Boulevard.jpg'), 
    title: 'Boulevard of Broken Dr...', 
    year: '2004', 
    genre: 'Rock', 
    time: '21h ago',
    spotify: 'https://open.spotify.com/intl-es/track/5GorCbAP4aL0EJ16frG2hd?si=0cf98df659ff4af2',
    youtube: 'https://www.youtube.com/watch?v=Soa3gO7tL-c&ab_channel=GreenDay',
    soundcloud: 'https://soundcloud.com/greenday/boulevard-of-broken-dreams-3?si=f81a942e76674c339f3ad1343a5a29cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },

    { id: '4', 
    name: 'Resultado 4', 
    user: 'Brandon Flowers', 
    profileImage: require('../assets/images/Brandon.jpeg'), 
    description: '"Shot at the Night" celebrates the excitement of love and adventure. The lyrics, describing a romantic encounter under the city lights, capture the feeling of euphoria and excitement of being in love. It is a song that inspires us to pursue our dreams and live every moment to the fullest.',
    image : require('../assets/images/shot.jpg'), 
    title: 'Shot at the Night', 
    year: '2013', 
    genre: 'Rock', 
    time: '8d ago',
    spotify: 'https://open.spotify.com/intl-es/track/2aZ2Co4NeQRsqWcU930zHT?si=3702bc44a11e42bd',
    youtube: 'https://www.youtube.com/watch?v=X4YK-DEkvcw&ab_channel=TheKillersVEVO',
    soundcloud: 'https://soundcloud.com/thekillers/shot-at-the-night-album?si=6a0c46a8025f4ed2b8efb3b3d72523b9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },
  ];

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { 
      post: { 
        ...post,
        spotify: post.spotify,
        youtube: post.youtube,
        soundcloud: post.soundcloud
      } 
    });
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
      spotify={item.spotify} 
      youtube={item.youtube}
      soundcloud={item.soundcloud} 
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