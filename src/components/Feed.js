import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Share } from 'react-native';

const Feed = ({ description, title, year, genre, user, photo, rectangleImage, time, navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddCommentModalVisible, setAddCommentModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? 'heart' : 'heart-outline';
  const likeButtonColor = liked ? 'red' : 'black';

  const userURLs = {
    'John Lennon': {
      spotify: 'https://open.spotify.com/intl-es/album/0ETFjACtuP2ADo6LFhL6HN?si=VQBHGpgvS-m_QUuTPJzHsA',
      youtube: 'https://www.youtube.com/playlist?list=PLiN-7mukU_RE21iD9opzXGPC-VSWfu92Z',
      soundcloud: 'https://soundcloud.com/user-79534953/the-beatles-abbey-road-full-album?si=1ccb676c1ce743439c609fdb9a66f9a8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Ariana Grande': {
      spotify: 'https://open.spotify.com/intl-es/album/5EYKrEDnKhhcNxGedaRQeK?si=Y6Q90KAgQ26UnWpSFjJTPw',
      youtube: 'https://youtube.com/playlist?list=PLT5kE8dBKiP495x-xlAXCQ7jlmHvGg5bu&feature=shared',
      soundcloud: 'https://soundcloud.com/arianagrande/sets/eternal-sunshine-238265361?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Taylor Swift': {
      spotify: 'https://open.spotify.com/intl-es/album/151w1FgRZfnKZA9FEcg9Z3?si=FMq6EodoQCK1jG1HFq0dyw',
      youtube: 'https://youtube.com/playlist?list=OLAK5uy_lw2-Cu3aRY2Tkfi28_79m05SkBF_tlufg&feature=shared',
      soundcloud: 'https://soundcloud.com/taylorswiftofficial/sets/midnights-5?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Harry Styles': {
      spotify: 'https://open.spotify.com/intl-es/album/5r36AJ6VOJtp00oxSkBZ5h?si=372Vvuc2Stu0Hg5-0UAzcg',
      youtube: 'https://youtube.com/playlist?list=PLxA687tYuMWgWbfUsntXDsn5HgOz90ka-&feature=shared',
      soundcloud: 'https://soundcloud.com/harrystyles/sets/harrys-house-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  };

  const handleServiceIconPress = (service) => {
    const userServices = userURLs[user]; 
    const serviceURL = userServices[service]; 
    if (serviceURL) {
      Linking.openURL(serviceURL); 
    } else {
      console.log('URL no encontrada para este servicio');
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
    if (user === 'Harry Styles' || user === 'Taylor Swift' || user === 'Ariana Grande') {
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
            <TouchableOpacity onPress={() => navigation.navigate('Post')}>
              <Text>Go to Publication</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
      );
    } else if (user === 'John Lennon') {
      return (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => console.log('Edit Post')}>
            <Text>Edit Post</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => console.log('Delete Post')}>
            <Text>Delete Post</Text>
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
        // Opcional: url: 'https://www.ejemplo.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido con una actividad específica de la aplicación
        } else {
          // Compartido exitosamente
        }
      } else if (result.action === Share.dismissedAction) {
        // Compartir cancelado por el usuario
      }
    } catch (error) {
      // Manejo de errores
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <LinearGradient
          colors={['#87CEEB', '#FFA500', '#FF4500']}
          style={styles.profileImageContainer}
        >
          <Image source={photo} style={styles.userPhoto} />
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
      <Image source={rectangleImage} style={styles.rectangleImage} />
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => setLiked(!liked)}
        >
          <Icon name={likeButtonIcon} size={20} color={likeButtonColor} />
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
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
  description: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    textAlign: 'justify',
  },

  
});

export default Feed;
