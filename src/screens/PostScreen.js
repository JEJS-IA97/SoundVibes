import {React, useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TopBar from '../components/TopBar';
import Icon from 'react-native-vector-icons/Ionicons';


const PostScreen = ({ route, navigation }) => {
  const { post } = route.params;

  const photo = require('../assets/images/Jhon.jpeg');
  const rectangleImage = require('../assets/images/1.jpg');

  const [liked, setLiked] = useState(false);
  const likeButtonIcon = liked ? 'heart' : 'heart-outline';
  const likeButtonColor = liked ? 'red' : 'black';

  const comments = [
    { id: 1, photo: require('../assets/images/Taylor.jpg'), userName: 'Taylor Swift', 
    text: 'Love it!', 
    time: '1h ago' },
    { id: 2, photo: require('../assets/images/ariana.png'), userName: 'Ariana Grande', text: 'Best album', time: '2h ago' },
    { id: 3, photo: require('../assets/images/Harry.jpg'), userName: 'Harry Styles', text: 'Legends', time: '3h ago' },
  ];

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
                <Image source={photo} style={styles.userPhoto} />
              </LinearGradient>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Usuario</Text>
                <Text style={styles.time}>1h</Text>
              </View>
              <TouchableOpacity style={styles.optionsContainer}>
                <Icon name="ellipsis-vertical" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>Alguna descripción</Text>
            <Image source={rectangleImage} style={styles.rectangleImage} />
            <Text style={styles.title}>Titulo</Text>
              <Text style={styles.details}>Año | Género</Text>
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon} >
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
                    <Text style={styles.commentUserName}>{comment.userName}</Text>
                    <Text style={styles.commentText}>{comment.text}</Text>
                    <Text style={styles.commentTime}>{comment.time}</Text>
                  </View>
                </View>
              ))}
            </View>

          </View>
        </View>  
        </ScrollView> 

      </LinearGradient>
    </View>
  );
};

const styles = {
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
    marginTop: 10,
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
  
  // postWindow: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 20,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  // postImage: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 10,
  // },
};

export default PostScreen;
