import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { getUserProfileImage } from '../api/Auth/index';

const ProfileImage2 = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {

      try {
        const profileImage = await getUserProfileImage();
        setSelectedImage(profileImage.Data.profileImage);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching user profile image:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);


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
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Image
              source={selectedImage ? { uri: selectedImage } : require('../assets/images/Jhon.jpeg')}
              style={styles.profileImage}
            />
          )}
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
