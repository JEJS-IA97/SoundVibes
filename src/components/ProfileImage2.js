import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileImage2 = ({ navigation, userProfileImage }) => {
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  profileContainer: {
    paddingTop:40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 200,
    height: 200,
    borderRadius: 120,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width:180,
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
});

export default ProfileImage2;
