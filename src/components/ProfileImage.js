import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { getUserProfileImage } from '../api/Auth/index';

import { listFiles, uploadToFirebase } from "../../firebaseConfig";
import { updateUserImageProfile } from '../api/User';

const ProfileImage = ({ navigation }) => {
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

  const selectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Permission to access camera roll is required!');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.cancelled) {

        const image = pickerResult.assets[0].uri

        setSelectedImage(image);
        const fileName = image.split("/").pop();
        const uploadResp = await uploadToFirebase(image, fileName, (v) =>
          console.log(`Percent: ${Number(v).toFixed(2)}%`)
        );

        if (!uploadResp.downloadUrl) {
          throw Error ("No se subió");
        }

        const response = await updateUserImageProfile(uploadResp.downloadUrl);
        console.log(response);

      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

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
        <TouchableOpacity onPress={selectImage} style={styles.cameraButton}>
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