import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage2';

const UserScreen2 = ({ navigation }) => {
    const userProfileImage = require('../assets/images/Ed.jpg');
    const posts = [
    { id: 1, image: require('../assets/images/edpost1.jpg') },
    { id: 2, image: require('../assets/images/edpost2.jpg') },
    { id: 3, image: require('../assets/images/edpost3.jpg') },
    { id: 4, image: require('../assets/images/edpost4.png') },
    { id: 5, image: require('../assets/images/edpost5.jpg') },
    { id: 6, image: require('../assets/images/edpost6.png') }, 
    { id: 7, image: require('../assets/images/edpost7.png') },   
    { id: 8, image: require('../assets/images/edpost8.jpeg') },
    { id: 9, image: require('../assets/images/edpost9.png') },     
    { id: 10, image: require('../assets/images/edpost10.png') },   
    { id: 11, image: require('../assets/images/edpost11.jpg') },
    { id: 12, image: require('../assets/images/edpost12.jpeg') },     
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
          <Text style={styles.name}>Edward Sheeran</Text>
        <Text style={styles.username}>@teddysphotos</Text>
            <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>50</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>42M</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>20</Text>
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

export default UserScreen2;