import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { LinearGradient } from 'expo-linear-gradient';

const FavoritesScreen = ({ navigation }) => {
  const favoritesData = [
    {
      id: '1',
      user: 'NF',
      profileImage: require('../assets/images/nf.jpg'),
      image: require('../assets/images/1.jpg'),
      description: 'This song explores themes of internal struggle, regret, and pain in a relationship, with a focus on difficulty communicating and unmet expectations.',
      title: 'Let You Down',
      year: '2017',
      genre: 'Hip hop',
      spotify: 'https://open.spotify.com/intl-es/track/52okn5MNA47tk87PeZJLEL?si=f36f7659692c458a',
      youtube: 'https://www.youtube.com/watch?v=0501BTnbrxg&ab_channel=NFVEVO',
      soundcloud: 'https://soundcloud.com/nfrealmusic/let-you-down?si=6380a15f7e014a5caafcc163178a5c9d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: '2',
      user: 'Juan Pablo Isaza',
      profileImage: require('../assets/images/isaza.jpg'),
      image: require('../assets/images/2.jpg'),
      description: 'Is a moving expression of love and pain, capturing the complexity of human relationships. It describes the longing for a lost love, the internal struggle between hope and resignation, and the need to hide true feelings when faced with reality.',
      title: 'Cuando nadie ve',
      year: '2016',
      genre: 'Pop',
      spotify: 'https://open.spotify.com/intl-es/track/1Cxd4ZJJ9VOQQpNcpdcZEQ?si=fd34c8ce351d46d0',
      youtube: 'https://www.youtube.com/watch?v=szeA9tvItJY&ab_channel=MoratVEVO',
      soundcloud: 'https://soundcloud.com/morat-official/cuando-nadie-ve?in=user972057279/sets/morat&si=a9dd72dffaed4ee28971100ea1284d09&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    {
      id: '3',
      user: 'Christopher Martin',
      profileImage: require('../assets/images/Chris.jpg'),
      image: require('../assets/images/3.jpg'),
      description: '"The Scientist" is a mesmerizing masterpiece that seamlessly blends haunting melodies with poignant lyrics.  the songs minimalist instrumentation, create a timeless atmosphere of introspection and regret. Its universal themes of longing and redemption resonate deeply with listeners.',
      title: 'The Scientist',
      year: '2002',
      genre: 'Rock',
      spotify: 'https://open.spotify.com/intl-es/track/75JFxkI2RXiU7L9VXzMkle?si=48ea0fa73c0b4231',
      youtube: 'https://www.youtube.com/watch?v=RB-RcX5DS5A&ab_channel=Coldplay',
      soundcloud: 'https://soundcloud.com/user-956334953/coldplay-the-scientist?si=6103d7c553b9459eaa692221425a082a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
    { id: 4, image: require('../assets/images/4.jpg') },
    { id: 5, image: require('../assets/images/5.jpg') },
    { id: 6, image: require('../assets/images/6.jpg') },
    { id: 7, image: require('../assets/images/7.jpg') },
    { id: 8, image: require('../assets/images/8.jpg') },
    { id: 9, image: require('../assets/images/9.jpg') },
    { id: 10, image: require('../assets/images/10.png') },
    { id: 11, image: require('../assets/images/11.jpg') },
    { id: 12, image: require('../assets/images/12.jpg') },
    { id: 13, image: require('../assets/images/13.jpg') },
    { id: 14, image: require('../assets/images/14.jpg') },
    { id: 15, image: require('../assets/images/15.jpg') },
    { id: 16, image: require('../assets/images/16.jpg') },
    { id: 17, image: require('../assets/images/17.jpg') },
    { id: 18, image: require('../assets/images/18.jpg') },
    { id: 19, image: require('../assets/images/19.jpg') },
    { id: 20, image: require('../assets/images/20.jpg') },
    { id: 21, image: require('../assets/images/21.png') },
    { id: 22, image: require('../assets/images/22.jpg') },
    { id: 23, image: require('../assets/images/23.jpg') },
    { id: 24, image: require('../assets/images/24.jpg') },
  ];

  const goToPostDetail = (item) => {
    navigation.navigate('Post', { post: item });
  };
  

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']} style={styles.container}>
    <TopBar navigation={navigation}/>
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.postsContainer}>
          {favoritesData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.postItem} onPress={() => goToPostDetail(item)}>
              <Image source={item.image} style={styles.postImage} />
            </TouchableOpacity>
          ))}
        </View>
        </View>
    </ScrollView> 
    <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 16,
    marginTop:16,
  },
  postItem: {
    width: '32%',
    aspectRatio: 1,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default FavoritesScreen;