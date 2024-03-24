import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';
import Feed from '../components/Feed';
import { BackHandler } from 'react-native';

const FeedScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]); 

  
  const feedData = [
    { id: '1', 
    name: 'Post 1', 
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
    name: 'Post 2', 
    user: 'Ariana Grande', 
    profileImage: require('../assets/images/ariana.png'), 
    description: '˚❀*·ꕤ. eternal sunshine out now ｡˚❀*·ꕤ.',
    image : require('../assets/images/eternal.jpg'), 
    title: 'Eternal Sunshine', 
    year: '2024', 
    genre: 'Pop', 
    time: '10h ago',
    spotify: 'https://open.spotify.com/intl-es/album/5EYKrEDnKhhcNxGedaRQeK?si=Y6Q90KAgQ26UnWpSFjJTPw',
    youtube: 'https://youtube.com/playlist?list=PLT5kE8dBKiP495x-xlAXCQ7jlmHvGg5bu&feature=shared',
    soundcloud: 'https://soundcloud.com/arianagrande/sets/eternal-sunshine-238265361?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },

    { id: '3', 
    name: 'Post 3', 
    user: 'Taylor Swift', 
    profileImage: require('../assets/images/Taylor.jpg'),  
    description: 'Midnights, the stories of 13 sleepless nights scattered throughout my life.',
    image : require('../assets/images/midnights.jpg'), 
    title: 'Midnights', 
    year: '2022', 
    genre: 'Pop', 
    time: '6d ago',
    spotify: 'https://open.spotify.com/intl-es/album/151w1FgRZfnKZA9FEcg9Z3?si=FMq6EodoQCK1jG1HFq0dyw',
    youtube: 'https://youtube.com/playlist?list=OLAK5uy_lw2-Cu3aRY2Tkfi28_79m05SkBF_tlufg&feature=shared',
    soundcloud: 'https://soundcloud.com/taylorswiftofficial/sets/midnights-5?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },

    { id: '4', 
    name: 'Post 4', 
    user: 'Harry Styles', 
    profileImage: require('../assets/images/Harry.jpg'), 
    description: `Two years of Harry's House. I’ve never been happier than making this album, thank you for everything.`,
    image : require('../assets/images/harrys.jpg'), 
    title: `Harry's House`, 
    year: '2022', 
    genre: 'Pop', 
    time: '1w ago',
    spotify: 'https://open.spotify.com/intl-es/album/5r36AJ6VOJtp00oxSkBZ5h?si=372Vvuc2Stu0Hg5-0UAzcg',
    youtube: 'https://youtube.com/playlist?list=PLxA687tYuMWgWbfUsntXDsn5HgOz90ka-&feature=shared',
    soundcloud: 'https://soundcloud.com/harrystyles/sets/harrys-house-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
   },
  ];

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { post });
  };

  const renderItem = ({ item }) => (
    <Feed
      description={item.description}
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
        <FlatList
          data={feedData}
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
  feedItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default FeedScreen;