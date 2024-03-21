import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const posts = [
    { id: '1', 
    name: 'Post 1', 
    user: 'John Lennon', 
    profileImage: require('../assets/images/Jhon.jpeg'), 
    description: '"Abbey Road" is more than an album; it is a musical journey that trascends time.', 
    image : require('../assets/images/post1.jpg'), 
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
    user: 'John Lennon', 
    profileImage: require('../assets/images/Jhon.jpeg'), 
    description: '"Utopian vision of a world without borders, religions or material possessions, where humanity lives in harmony and peace.', 
    image : require('../assets/images/post2.jpg'), 
    title: 'Imagine', 
    year: '1971', 
    genre: 'Rock', 
    time: '8d ago',
    spotify: 'https://open.spotify.com/intl-es/track/6FB1DztAAnPJFhRFUOgHME?si=ab73e4cefba841f0',
    youtube: 'https://music.youtube.com/watch?v=rAn-AWXtHv0&si=gVy-_HLwSrJX5hDz',
    soundcloud: 'https://soundcloud.com/cardell/imagine-remastered?si=acebfa8e65b64105a08600f30196acff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  },

   { id: '3', 
    name: 'Post 3', 
    user: 'John Lennon', 
    profileImage: require('../assets/images/Jhon.jpeg'), 
    description: 'Talking is the slowest way to communicate, music is much better. "Now and Then" is a love letter.', 
    image : require('../assets/images/post3.png'), 
    title: 'Now and Then', 
    year: '1973', 
    genre: 'Rock', 
    time: '10d ago',
    spotify: 'https://open.spotify.com/intl-es/track/4vziJcnB2Qyi9o4nIRUeN7?si=0b3ef0f5159445a4',
    youtube: 'https://music.youtube.com/watch?v=fOjuqmZzul4&si=GFPuT6BNHroL6Jdq',
    soundcloud: 'https://soundcloud.com/dan-hall-944392924/now-and-then-the-beatles?si=a55e98061208455ba889148d70e37141&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  }, 

    { id: 4, image: require('../assets/images/post4.jpg') },
    { id: 5, image: require('../assets/images/post5.png') },
    { id: 6, image: require('../assets/images/post6.jpg') }, 
    { id: 7, image: require('../assets/images/post7.jpg') },   
    { id: 8, image: require('../assets/images/post8.jpg') },
    { id: 9, image: require('../assets/images/post9.jpg') },     
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
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('User')}>
          <FontAwesome name="cog" size={24} color="black" />
        </TouchableOpacity>
        <ProfileImage navigation={navigation}/>
        <View style={styles.profileContainer}>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>100</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>10K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>500</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
    
          <View style={styles.postsContainer}>
          {posts.map((item) => (
            <TouchableOpacity key={item.id} style={styles.postItem} onPress={() => navigateToPostScreen(item)}>
              <Image source={item.image} style={styles.postImage} />
            </TouchableOpacity>
          ))}
        </View>
        </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  followButton: {
    backgroundColor: '#FF4500',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 16
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
  settingsButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
});

export default ProfileScreen;