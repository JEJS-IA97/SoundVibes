import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage2';

const UserScreen4 = ({ navigation }) => {
    const userProfileImage = require('../assets/images/Chris.jpg');
    const posts = [
    { id: 1, image: require('../assets/images/chrispost1.jpeg') },
    { id: 2, image: require('../assets/images/chrispost2.png') },
    { id: 3, image: require('../assets/images/chrispost3.jpg') },
    { id: 4, image: require('../assets/images/chrispost4.jpg') },
    { id: 5, image: require('../assets/images/chrispost5.png') },
    { id: 6, image: require('../assets/images/chrispost6.jpg') }, 
    { id: 7, image: require('../assets/images/chrispost7.jpg') },   
    { id: 8, image: require('../assets/images/chrispost8.jpg') },
    { id: 9, image: require('../assets/images/chrispost9.png') },     
    { id: 10, image: require('../assets/images/chrispost10.png') },   
    { id: 11, image: require('../assets/images/chrispost11.jpg') },
    { id: 12, image: require('../assets/images/chrispost12.png') },     
  ];
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
          <ProfileImage navigation={navigation} userProfileImage={userProfileImage} />
          <View style={styles.profileContainer}>
          <Text style={styles.name}>Christopher Martin</Text>
        <Text style={styles.username}>@chrismartin</Text>
            <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>75</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>750K</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>300</Text>
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
  name: {
    paddingTop:15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserScreen4;