import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const PostScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? 'heart' : 'heart-outline';
  const likeButtonColor = liked ? 'red' : 'black';

  const comments = [
    { id: 1, photo: require('../assets/images/Taylor.jpg'), user: 'Taylor Swift', 
    text: 'Love it!', 
    time: '1h ago' },
    { id: 2, photo: require('../assets/images/ariana.png'), user: 'Ariana Grande', text: 'Best album', time: '2h ago' },
    { id: 3, photo: require('../assets/images/Harry.jpg'), user: 'Harry Styles', text: 'Legends', time: '3h ago' },
  ];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const renderOptions = () => {
    return (
      <View style={styles.optionsContainer}>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log('Copy Link')}>
          <Text>Copy Link</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log('Add to Favorites')}>
          <Text>Add to Favorites</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => console.log('Follow User')}>
          <Text>Follow User</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 69, 0, 0.3)']} style={styles.container}>
        <TopBar navigation={navigation}/>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.container2}>
              <View style={styles.userContainer}>
                <LinearGradient
                  colors={['#87CEEB', '#FFA500', '#FF4500']}
                  style={styles.profileImageContainer}
                >
                  <Image source={post.profileImage} style={styles.userPhoto} />
                </LinearGradient>
                <View style={styles.userInfo}>
                  <Text style={styles.user}>{post.user}</Text>
                  <Text style={styles.time}>1h</Text>
                </View>
                <TouchableOpacity style={styles.optionsContainer} onPress={toggleModal}>
                  <Icon name="ellipsis-vertical" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.description}>{post.description}</Text>
              <Image source={post.image} style={styles.image} />
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.year}>{post.year}</Text>
              <Text style={styles.genre}>{post.genre}</Text>
  
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon} >
                  <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
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
                <TouchableOpacity style={styles.button}>
                  <Icon name="chatbubble-outline" size={20} color="black" />
                  <Text style={styles.buttonText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Icon name="share-outline" size={20} color="black" />
                  <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.separator} />
              <View style={styles.commentContainer}>
                {comments.map((comment) => (
                  <View style={styles.comment} key={comment.id}>
                    <LinearGradient
                      colors={['#87CEEB', '#FFA500', '#FF4500']}
                      style={styles.profileImageContainer}
                    >
                      <Image source={comment.photo} style={styles.commentUserPhoto} />
                    </LinearGradient>
                    <View style={styles.commentContent} key={comment.id}>
                      <Text style={styles.commentUserName}>{comment.user}</Text>
                      <Text style={styles.commentText}>{comment.text}</Text>
                      <Text style={styles.commentTime}>{comment.time}</Text>
                    </View>
                  </View>
                ))}
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
          </View>  
        </ScrollView> 
        <BottomBar navigation={navigation} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container2: {
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
  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  userPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userInfo: {
    flex: 1, 
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  description: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
    textAlign: 'justify',
  },
  rectangleImage: {
    width: '100%',
    height: 400,
    marginBottom: 5,
    marginTop: 5,
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
  commentContainer: {
    marginTop: 15,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  commentUserPhoto: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  commentContent: {
    flex: 1,
    paddingHorizontal: 10
  },
  commentUserName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    fontSize: 14,
    textAlign: 'justify'
  },
  commentTime: {
    fontSize: 12,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 5,
    marginTop: 5,
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
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    width: '100%',
    alignSelf: 'center',
    marginTop:15,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  year:{
    paddingBottom: 3,
  },
  genre:{
    paddingBottom:6,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default PostScreen;
