import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileImage = ({ navigation }) => {
  const userProfileImage = require('../assets/images/John.jpg');

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Feed')}
          >
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <LinearGradient
            colors={['rgba(19, 84, 122, 0.8)', 'rgba(128, 208, 199, 0.8)']}
            style={styles.profileImageContainer}
          >
            <Image source={userProfileImage} style={styles.profileImage} />
          </LinearGradient>
          <TouchableOpacity style={styles.cameraButton}>
            <Icon name="camera" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.name}>John Lennon</Text>
          <Text style={styles.username}>@johnlennon</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16
  },
  backButton: {
    position: 'absolute',
    top: 1,
    left: 16,
    zIndex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },
  cameraButton: {
    position: 'absolute',
    bottom: 70,
    right: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
});

export default ProfileImage;