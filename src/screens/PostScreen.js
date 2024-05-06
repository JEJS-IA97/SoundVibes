import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, Modal, StyleSheet, TextInput, Share, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../components/TopBar';
import { Linking } from 'react-native';
import { getCommentByPost, createComment } from '../api/Comment';


const PostScreen = ({ route, navigation, onPress }) => {
  const { post } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? 'heart' : 'heart-outline';
  const likeButtonColor = liked ? 'red' : 'black';
  const { spotify, youtube, soundcloud } = post;
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const scrollViewRef = useRef(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(post);
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const response = await getCommentByPost(post.id);
      console.log(response.Data)
      setComments(response.Data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const [commentData, setCommentContent] = useState({
    content: '',
  });



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

  const openCommentBox = () => {
    setIsCommentBoxOpen(true);
    console.log('Comment box opened');
    scrollViewRef.current.scrollToEnd({ animated: true });
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

  const postComment = async () => {
    try {
      const newComment = await createComment({ content: commentData.content, post_id: post.id });
      console.log('Success!');
      setCommentContent({ content: '' });
      loadComments();
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 69, 0, 0.3)']} style={styles.container}>
        <TopBar navigation={navigation} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}
        >
          <ScrollView ref={scrollViewRef}>
            <View style={styles.container}>
              <View style={styles.container2}>
                <View style={styles.userContainer}>
                  <LinearGradient
                    colors={['#87CEEB', '#FFA500', '#FF4500']}
                    style={styles.profileImageContainer}
                  >
                    {post?.User?.profile &&
                      <Image Image source={{ uri: post.User.profile }} style={styles.userPhoto} />
                    }
                  </LinearGradient>
                  <View style={styles.userInfo}>
                    <Text style={styles.user}>{post.User.username}</Text>
                    <Text style={styles.time}>{post.createdAt}</Text>
                  </View>
                  <TouchableOpacity style={styles.optionsContainer} onPress={toggleModal}>
                    <Icon name="ellipsis-vertical" size={20} color="black" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.description}>{post.description}</Text>
                {post?.image &&
                  <Image
                    source={{
                      uri: post.image
                    }}
                    style={styles.image}
                  />
                }
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.year}>{post.year}</Text>
                <Text style={styles.genre}>{post.gender}</Text>

                <View style={styles.socialIconsContainer}>
                  <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('spotify', spotify)}>
                    <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('youtube', youtube)} >
                    <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialIcon} onPress={() => handleServiceIconPress('soundcloud', soundcloud)} >
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
                  <TouchableOpacity style={styles.button} onPress={openCommentBox}>
                    <Icon name="chatbubble-outline" size={20} color="black" />
                    <Text style={styles.buttonText}>Comment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={onShare}>
                    <Icon name="share-outline" size={20} color="black" />
                    <Text style={styles.buttonText}>Share</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <View style={styles.commentContainer}>
                  {comments?.map((item, index) => (
                    <View key={index} style={styles.comment}>
                      <LinearGradient
                        colors={['#87CEEB', '#FFA500', '#FF4500']}
                        style={styles.profileImageContainer}
                      >
                        {item?.user?.profile && <Image source={{ uri: item.user.profile }} style={styles.commentUserPhoto} />}
                      </LinearGradient>
                      <View style={styles.commentContent}>
                        <Text style={styles.commentUserName}>{item.user.username}</Text>
                        <Text style={styles.commentText}>{item.content}</Text>
                        <Text style={styles.commentTime}>{item.createdAt}</Text>
                      </View>
                    </View>
                  ))}
                </View>
                {isCommentBoxOpen && (
                  <View style={styles.comment2}>
                    <LinearGradient
                      colors={['#87CEEB', '#FFA500', '#FF4500']}
                      style={styles.profileImageContainer}
                    >
                      <Image source={require('../assets/images/Jhon.jpeg')} style={styles.commentUserPhoto} />
                    </LinearGradient>
                    <TextInput
                      style={styles.commentTextInput2}
                      placeholder="Write a comment..."
                      onChangeText={(text) => setCommentContent({ ...commentData, content: text })}
                      value={commentData.content}
                    />
                    <TouchableOpacity onPress={postComment}>
                      <Icon name="send" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                )}

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
        </KeyboardAvoidingView>
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

  comment2: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  commentTextInput2: {
    flex: 1,
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 10,
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
    marginTop: 15,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  year: {
    paddingBottom: 3,
  },
  genre: {
    paddingBottom: 6,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default PostScreen;
