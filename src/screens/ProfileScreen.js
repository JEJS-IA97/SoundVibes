import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage';

const ProfileScreen = ({ navigation }) => {
  const posts = [
    { id: 1, image: require('../assets/images/post1.jpg') },
    { id: 2, image: require('../assets/images/post2.jpg') },
    { id: 3, image: require('../assets/images/post3.png') },
    { id: 4, image: require('../assets/images/post4.jpg') },
    { id: 5, image: require('../assets/images/post5.png') },
    { id: 6, image: require('../assets/images/post6.jpg') }, 
    { id: 7, image: require('../assets/images/post7.jpg') },   
    { id: 8, image: require('../assets/images/post8.jpg') },
    { id: 9, image: require('../assets/images/post9.jpg') },     
  ];
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
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
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <View style={styles.postsContainer}>
            {posts.map(post => (
              <TouchableOpacity key={post.id} style={styles.postItem}>
                <Image source={post.image} style={styles.postImage} />
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
});

export default ProfileScreen;