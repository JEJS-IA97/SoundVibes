import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Result = ({ title, year, genre, user, profileImage, image, time, onPress, spotify, youtube, soundcloud }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    onPress(); 
    setIsModalVisible(false);
  };

  const handleGoToPublication = () => {
    setIsModalVisible(false); 
    navigation.navigate('Post', { 
      post: { title, year, genre, user, profileImage, image, time, spotify, youtube, soundcloud} 
    });
  };
  
  const userURLs = {
    'John Lennon': {
      spotify: 'https://open.spotify.com/intl-es/album/0ETFjACtuP2ADo6LFhL6HN?si=VQBHGpgvS-m_QUuTPJzHsA',
      youtube: 'https://www.youtube.com/playlist?list=PLiN-7mukU_RE21iD9opzXGPC-VSWfu92Z',
      soundcloud: 'https://soundcloud.com/user-79534953/the-beatles-abbey-road-full-album?si=1ccb676c1ce743439c609fdb9a66f9a8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Christopher Martin': {
      spotify: 'https://open.spotify.com/intl-es/track/7LVHVU3tWfcxj5aiPFEW4Q?si=d4e9935bcadb43d6',
      youtube: 'https://www.youtube.com/watch?v=k4V3Mo61fJM&ab_channel=Coldplay',
      soundcloud: 'https://soundcloud.com/user-956334953/coldplay-fix-you?si=4558e8602920492dbd648665c3375b60&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Billie Armstrong': {
      spotify: 'https://open.spotify.com/intl-es/track/5GorCbAP4aL0EJ16frG2hd?si=0cf98df659ff4af2',
      youtube: 'https://www.youtube.com/watch?v=Soa3gO7tL-c&ab_channel=GreenDay',
      soundcloud: 'https://soundcloud.com/greenday/boulevard-of-broken-dreams-3?si=f81a942e76674c339f3ad1343a5a29cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    'Brandon Flowers': {
      spotify: 'https://open.spotify.com/intl-es/track/2aZ2Co4NeQRsqWcU930zHT?si=3702bc44a11e42bd',
      youtube: 'https://www.youtube.com/watch?v=X4YK-DEkvcw&ab_channel=TheKillersVEVO',
      soundcloud: 'https://soundcloud.com/thekillers/shot-at-the-night-album?si=6a0c46a8025f4ed2b8efb3b3d72523b9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  };

  const handleServiceIconPress = (service) => {
    const userServices = userURLs[user];
    if (userServices) {
      const serviceURL = userServices[service];
      if (serviceURL) {
        Linking.openURL(serviceURL);
      } else {
        console.log('URL no encontrada para este servicio');
      }
    } else {
      console.log('Servicios de usuario no encontrados');
    }
  };
  
  
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const renderOptions = () => {
    if (user === 'Brandon Flowers' || user === 'Christopher Martin' || user === 'Billie Armstrong') {
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

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { 
      post: { 
        title: post.title,
        year: post.year,
        genre: post.genre,
        user: post.user,
        profileImage: post.profileImage,
        image: post.image,
        time: post.time,
        spotify: userURLs[post.user].spotify,
        youtube: userURLs[post.user].youtube,
        soundcloud: userURLs[post.user].soundcloud
      } 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <LinearGradient
          colors={['#87CEEB', '#FFA500', '#FF4500']}
          style={styles.profileImageContainer}
        >
          <Image source={profileImage} style={styles.userPhoto} />
        </LinearGradient>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <TouchableOpacity style={styles.optionsContainer} onPress={toggleModal}>
          <Icon name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.rectangleImage} />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={toggleModal} />
          <View style={styles.modalContent}>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContent: {
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
});

export default Result;
