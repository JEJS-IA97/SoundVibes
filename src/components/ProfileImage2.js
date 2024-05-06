import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
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
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Image
              source={selectedImage ? { uri: selectedImage } : require('../assets/images/Jhon.jpeg')}
              style={styles.profileImage}
            />
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  profileImage: {
    width:33,
    height:33,
    resizeMode: 'cover',
    borderRadius: 120,
  },
});

export default ProfileImage2;
