import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, RefreshControl } from 'react-native';
import TopBar from '../components/TopBar';
import { LinearGradient } from 'expo-linear-gradient';
import Feed from '../components/Feed';
import { BackHandler } from 'react-native';
import { getFeed } from '../api/Post/index';
import { getUserLogged } from '../api/Auth';

const FeedScreen = ({ navigation }) => {
  const [feedData, setFeedData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getFeed();
      if (response && response.Data) {
        setFeedData(response.Data);
      } else {
        console.error('Feed data is empty or malformed:', response);
      }
    } catch (error) {
      console.error('Error fetching feed data:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchData();
    } catch (error) {
      console.error('Error refreshing feed data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]);

  const navigateToPostScreen = (post) => {
    navigation.navigate('Post', { post });
  };

  const renderItem = ({ item }) => (
    <Feed
      description={item.description}
      title={item.title}
      year={item.year}
      genre={item.gender}
      userId={item.User.id}
      user={item.User.username}
      profileImage={item.User.profile}
      image={item.image}
      time={item.createdAt}
      spotify={item.link_spotify}
      youtube={item.link_youtube}
      soundcloud={item.link_soundcloud}
      onPress={() => navigateToPostScreen(item)}
      likes={item.likes}
      postId={item.id}
    />
  );

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.3)', 'rgba(255, 69, 0, 0.3)']} style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#FF4500']} 
              tintColor={'#FF4500'}
            />
          }
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default FeedScreen;
