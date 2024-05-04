import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { firebaseApp } from '../../firebaseConfig';
import { login } from '../api/Auth/index';
import 'firebase/storage';

const storage = firebaseApp.storage();

const ProfileImage = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await login('username', 'password');
        if (userData.profile) {
          setSelectedImage(userData.profile);
        }
      } catch (error) {
        console.log('Error fetching user profile:', error);
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
        setSelectedImage(pickerResult.uri);
        // Subir la imagen a Firebase Storage
        const downloadURL = await uploadImageToFirebase(pickerResult.uri);
        console.log('Download URL:', downloadURL);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };
  
  const uploadImageToFirebase = async (uri) => {
    try {
      const storageRef = storage.ref();
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const imageRef = storageRef.child(`profile/${filename}`);
      await imageRef.putFile(uri);
      return await imageRef.getDownloadURL();
    } catch (error) {
      console.log('Error uploading image to Firebase:', error);
      return null;
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
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
          ) : (
            <Image source={require('../assets/images/Jhon.jpeg')} style={styles.profileImage} />
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
