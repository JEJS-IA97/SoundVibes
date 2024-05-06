import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Modal, Text, TextInput, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { listFiles, uploadToFirebase } from "../../firebaseConfig";
import { getUserProfileImage } from '../api/Auth/index';
import ProfileImage2 from '../components/ProfileImage2';
import { create } from '../api/Post';

const BottomBar = () => {
  const navigation = useNavigation();
  const [isAddPostModalVisible, setAddPostModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileImage = await getUserProfileImage();
        setLoading(false);
        setProfileImageLoaded(true);
      } catch (error) {
        console.log('Error fetching user profile image:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const [postData, setPostData] = useState({
    description: '',
    title: '',
    gender: '',
    year: '',
    link_spotify: '',
    link_soundcloud: '',
    link_youtube: '',
    image: ''
  });

  const route = useRoute();

  const toggleAddPostModal = () => {
    setAddPostModalVisible(!isAddPostModalVisible);
  };

  const handleAddPost1 = () => {
    toggleAddPostModal();
  };

  const handleAddPost = async () => {
    try {
      const newPost = await create(postData);
      console.log('Success!');
      if (newPost.Message === "Success") {
        setAddPostModalVisible(false);
      }
      console.log(newPost);
      // Resto del código para manejar el nuevo post creado...
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

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
        const image = pickerResult.assets[0].uri;
  
        setSelectedImage(image);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Icon name="home" size={25} color={route.name === 'Feed' ? '#FF4500' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={25} color={route.name === 'Search' ? '#FF4500' : 'white'} />
      </TouchableOpacity>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAddPost1} style={styles.addButton}>
          <Icon name="add-circle" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <Icon name="heart" size={25} color={route.name === 'Favorite' ? '#FF4500' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Icon name="notifications" size={25} color={route.name === 'Notification' ? '#FF4500' : 'white'} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddPostModalVisible}
        onRequestClose={toggleAddPostModal}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={toggleAddPostModal} style={styles.closeIcon}>
                <Icon name="close" size={25} color="black" />
              </TouchableOpacity>
              <View style={styles.separator} />

              <View style={styles.header}>
              <LinearGradient
                  colors={['#87CEEB', '#FFA500', '#FF4500']}
                  style={styles.profileImageContainer}
                >
                  <ProfileImage2 navigation={navigation} />
                </LinearGradient> 
                <Text>   | What are you listening to?</Text>
              </View>
              <TextInput
                style={styles.largeInput}
                placeholder="|"
                multiline={true}
                onChangeText={(text) => setPostData({ ...postData, description: text })}
              />
              <View style={styles.attachIconContainer}>
              <TouchableOpacity onPress={selectImage} >
                <Image source={require('../assets/icon/image.png')} style={styles.attachIcon} />
              </TouchableOpacity>
              {selectedImage && 
            <Image source={{ uri: selectedImage }} style={styles.selectedImageThumbnail} />
          }
              </View>
              <View style={styles.separator} />

              <View style={styles.additionalInfoContainer}>
                <View style={styles.additionalInfoRow}>
                  <Text style={styles.additionalInfoText}>Título:</Text>
                  <TextInput style={styles.additionalInfoInput} placeholder="Título" 
                  onChangeText={(text) => setPostData({ ...postData, title: text })}
                  />
                </View>

                <View style={styles.additionalInfoRow}>
                  <Text style={styles.additionalInfoText}>Género:</Text>
                  <TextInput style={styles.additionalInfoInput} placeholder="Género" 
                    onChangeText={(text) => setPostData({ ...postData, gender: text })}
                  />
                </View>

                <View style={styles.additionalInfoRow}>
                  <Text style={styles.additionalInfoText}>Año:</Text>
                  <TextInput style={styles.additionalInfoInput} placeholder="Año" 
                  onChangeText={(text) => setPostData({ ...postData, year: text })}
                  />
                </View>
              </View>

              <View style={styles.iconColumn}>
                <View style={styles.musicServiceIconContainer}>
                  <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
                  <TextInput style={styles.musicServiceInput} placeholder="Spotify"
                    onChangeText={(text) => setPostData({ ...postData, link_spotify: text })}
                  />
                </View>

                <View style={styles.musicServiceIconContainer}>
                  <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
                  <TextInput style={styles.musicServiceInput} placeholder="YouTube"
                    onChangeText={(text) => setPostData({ ...postData, link_youtube: text })}
                  />
                </View>

                <View style={styles.musicServiceIconContainer}>
                  <Image source={require('../assets/icon/soundcloud.png')} style={styles.musicServiceIcon} />
                  <TextInput style={styles.musicServiceInput} placeholder="SoundCloud" 
                    onChangeText={(text) => setPostData({ ...postData, link_soundcloud: text })}
                  />
                </View>
              </View>

              <View style={styles.separator} />

              <TouchableOpacity onPress={handleAddPost} style={styles.publishButton}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>SHARE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

 

  addButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
  },
  addButton: {
    backgroundColor: '#FF4500',
    borderRadius: 25,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)', 
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 5,
  },
  modalContainer: {
    marginTop: 120,
    width: 310,
    height: 500,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
  },
  circularImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  largeInput: {
    width: '80%',
    height: 100,
    padding: 20,
    top:-35
  },
  additionalInfoContainer: {
    width: '80%',
    marginBottom: 10,
    paddingLeft: 30,
  },
  additionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  additionalInfoText: {
    fontWeight: 'bold',
  },
  additionalInfoInput: {
    flex: 1,
    height: 25,
    marginLeft: 10,
    padding: 5,
  },
  iconColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  musicServiceIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  musicServiceInput: {
    height: 25,
    marginLeft: 10,
    padding: 5,
    width: '68%',
  },

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,

  },

  musicServiceIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  separator: {
    height: 1,
    backgroundColor: '#A19895',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 7,
  },

  closeIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },

  publishButton: {
    width:80,
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    fontWeight: 'bold', 
  },

  attachIconContainer: {
    width: 20,
    height: 20,
    paddingLeft: 220,
    flexDirection: 'row',
  },

  attachIcon: {
    width: 20,
    height: 20,
    left: 10
  },

  selectedImageThumbnail: {
    width: 35,
    height: 35,
    borderRadius: 5,
    left:35,
    top: -15
  },

  userProfileImage: {
    width: 33,
    height: 33,
    resizeMode: 'cover',
    borderRadius: 18, 
  },

  profileImageContainer:{
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  }

});

export default BottomBar;
