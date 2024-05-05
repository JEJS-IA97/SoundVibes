import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getUserProfileImage } from '../api/Auth/index';

const TopBar = ({ navigation }) => {
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
  
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />
      

      < LinearGradient
          colors={['#87CEEB', '#FFA500', '#FF4500']}
          style={styles.profileImageContainer}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Image
              source={selectedImage ? { uri: selectedImage } : require('../assets/images/Jhon.jpeg')}
              style={styles.userProfileImage}
            />
            
          )}
          </TouchableOpacity>
        </LinearGradient> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  logo: {
    width: 100,
    height: '100%',
    
  },

  userProfileImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 18, 
  },
  profileImageContainer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TopBar;