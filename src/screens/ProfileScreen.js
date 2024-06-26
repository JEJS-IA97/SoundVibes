import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage';
import { FontAwesome } from '@expo/vector-icons';

import { getPostsByUserLogged } from '../api/Post';

const ProfileScreen = ({ navigation }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getPostsByUserLogged();
      const postsData = response.Data;

        setPosts(postsData);

    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { post });
  };

  const renderItem = ({ item }) => (
    <Feed
        description={item.description}
        title={item.title}
        year={item.year}
        genre={item.gender}
        userId={item.User.id}
        user={item.User.username}
        profileImage={item.User.profile}
        image={item.image}
        time={item.createdAt}
        spotify={item.link_spotify}
        youtube={item.link_youtube}
        soundcloud={item.link_soundcloud}
        onPress={() => navigateToPostScreen(item)}
        likes={item.likes}
        isLiked={item.isLiked}
        postId={item.id}
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
              <Image source={{uri: item.image}} style={styles.postImage} />
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