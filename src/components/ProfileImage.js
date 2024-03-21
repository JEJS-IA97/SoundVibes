import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileImage = ({ navigation }) => {
  const userProfileImage = require('../assets/images/Jhon.jpeg');

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
            colors={['#87CEEB', '#FFA500', '#FF4500']}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 120,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    position: 'center',
    bottom: 50,
    right: -65,
    backgroundColor: '#87CEEB',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default ProfileImage; 