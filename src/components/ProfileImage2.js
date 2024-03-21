import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileImage2 = ({ navigation }) => {
  const userProfileImage = require('../assets/images/Jhon.jpeg');

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <LinearGradient
          colors={['#87CEEB', '#FFA500', '#FF4500']}
          style={styles.profileImageContainer}
        >
          <Image source={userProfileImage} style={styles.profileImage} />
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  profileContainer: {
    flex: 1,
  },
  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width:30,
    height: 30,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProfileImage2;
