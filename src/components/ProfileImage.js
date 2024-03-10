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
            <Icon name="return-up-back-outline" size={24} color="black" />
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
  },
  backButton: {
    position: 'fixed',
    top: 15,
    right: 160,
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
  },
  cameraButton: {
    position: 'fixed',
    bottom: 50,
    right: -65,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ProfileImage;