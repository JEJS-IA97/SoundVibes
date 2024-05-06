import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Share } from 'react-native';
import { setLikePost } from '../api/Post';
import { useSelector } from 'react-redux';

import { selectUserLogged } from "../features/user/userSlice";

const Feed = ({ postId, description, title, year, genre, user, userId, profileImage, image, time, navigation, onPress, spotify, youtube, soundcloud, likes }) => {

  const userLogged = useSelector(selectUserLogged);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? 'heart' : 'heart-outline';
  const likeButtonColor = liked ? 'red' : 'black';

  const handlePress = () => {
    onPress();
    setIsModalVisible(false);
  };

  const handleGoToPublication = () => {
    setIsModalVisible(false);
    navigation.navigate('Post', {
      post: { postId, title, year, genre, user, profileImage, image, time, spotify, youtube, soundcloud, likes }
    });
  };

  const handleServiceIconPress = (service) => {
    let serviceURL = '';
    switch (service) {
      case 'spotify':
        serviceURL = spotify;
        break;
      case 'youtube':
        serviceURL = youtube;
        break;
      case 'soundcloud':
        serviceURL = soundcloud;
        break;
      default:
        console.log('Servicio no válido');
    }

    if (serviceURL) {
      Linking.openURL(serviceURL);
    } else {
      console.log('URL no encontrada para este servicio');
    }
  };

  useEffect(() => {

    console.log(userLogged);

    const checkLikedStatus = async () => {
      try {

        const response = await setLikePost({ postId });
        setLiked(response.data.liked);
      } catch (error) {

        if (error.response.status === 404) {

          return;
        }

        console.error('Error al verificar el estado de like:', error);
      }
    };
    checkLikedStatus();
  }, [postId]);


  const handleLike = async () => {
    try {
      if (!liked) {
        // Llamar a la función setLikePost para dar like
        await setLikePost(postId, 'like'); // Pasamos postId y 'like' como acción
        setLiked(true);
      } else {
        // Llamar a la función setLikePost para quitar el like
        await setLikePost(postId, 'unlike'); // Pasamos postId y 'unlike' como acción
        setLiked(false);
      }
    } catch (error) {
      console.error('Error al dar like:', error);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleAddCommentModal = () => {
    setAddCommentModalVisible(!isAddCommentModalVisible);
  };

  const handleAddComment = () => {
    toggleAddCommentModal();
  };

  const renderOptions = () => {
    if (userId != userLogged.id) {
      return (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => console.log('Hide Post')}>
            <Text>Hide Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log('Copy Link')}>
            <Text>Copy Link</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log('Add to Favorites')}>
            <Text>Add to Favorites</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={handlePress}>
            <Text>Go to Publication</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (userId == userLogged.id) {
      return (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => console.log('Edit Post')}>
            <Text>Edit Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log('Delete Post')}>
            <Text>Delete Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text>Go to Publication</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this post on SoundVibes',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <LinearGradient
          colors={['#87CEEB', '#FFA500', '#FF4500']}
          style={styles.profileImageContainer}
        >
          <Image source={{ uri: profileImage }} style={styles.userPhoto} />
        </LinearGradient>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.optionsContainer} onPress={toggleModal}>
          <Icon name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Image source={{ uri: image }} style={styles.rectangleImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{year} | {genre}</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('spotify')}>
          <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('youtube')}>
          <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('soundcloud')}>
          <Image source={require('../assets/icon/soundcloud.png')} style={styles.musicServiceIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLike}>
          <Icon name={liked ? 'heart' : 'heart-outline'} size={20} color={liked ? 'red' : 'black'} />
        </TouchableOpacity>
        <Text style={styles.buttonText2}>Likes: {likes}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddComment}>
          <Icon name="chatbubble-outline" size={20} color="black" />
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Icon name="share-outline" size={20} color="black" />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer1}>
          <TouchableOpacity style={styles.modalBackground1} onPress={toggleModal} />
          <View style={styles.modalContent1}>
            {renderOptions()}
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  rectangleImage: {
    width: '100%',
    height: 200,
    marginBottom: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  socialIconsContainer: {
    flexDirection: 'row',
  },
  socialIcon: {
    marginRight: 10,
  },
  musicServiceIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground1: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContent1: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 22,
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#A19895',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
  },
  buttonText2: {
    marginLeft: -50,
  },
  description: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    textAlign: 'justify',
  },
});

export default Feed;
