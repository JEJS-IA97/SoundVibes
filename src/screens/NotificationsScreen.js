// NotificationsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const NotificationsScreen = ({ navigation }) => {
  const notificationsToday = [
    {
      id: '1',
      userName: 'Edward Sheeran',
      profileImage: require('../assets/images/Ed.jpg'),
      postImage: require('../assets/images/post1.jpg'),
      text: 'comment your post - 2 h ago',
      seen: true,
    },
    {
      id: '2',
      userName: 'Edward Sheeran',
      profileImage: require('../assets/images/Ed.jpg'),
      postImage: require('../assets/images/post1.jpg'),
      text: 'liked your post - 2 h ago',
      seen: true,
    },
    {
      id: '3',
      userName: 'Daniel Reynolds',
      profileImage: require('../assets/images/Daniel.jpg'),
      text: 'started following you - 5 h ago',
      seen: true,
    },
    {
      id: '4',
      userName: 'Christopher Martin',
      profileImage: require('../assets/images/Chris.jpg'),
      text: 'started following you - 8 h ago',
      seen: true,
    },
  ];

  const notificationsThisWeek = [
    {
      id: '5',
      userName: 'Edward Sheeran',
      profileImage: require('../assets/images/Ed.jpg'),
      postImage: require('../assets/images/post7.jpg'),
      text: 'comment your post - 3 d ago',
      seen: false,
    },
  ];

  const navigateToUserScreen = (userName) => {
    let userScreenName;
    switch (userName) {
      case 'Edward Sheeran':
        userScreenName = 'User2';
        break;
      case 'Daniel Reynolds':
        userScreenName = 'User3';
        break;
      case 'Christopher Martin':
        userScreenName = 'User4';
        break;
      default:
        userScreenName = 'UserDefault';
    }
  
    navigation.navigate(userScreenName);
  };

  const renderItem = (item) => (
    <View key={item.id}>
      <View style={styles.notificationItem}>
        <View style={[styles.statusIndicator, { backgroundColor: item.seen ? '#FF4500' : '#A19895' }]} />
        <TouchableOpacity onPress={() => navigateToUserScreen(item.userName)}>
          <Image source={item.profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.notificationContent}>
          <TouchableOpacity onPress={() => navigateToUserScreen(item.userName)}>
            <Text style={[styles.notificationTextUser, { color: '#007BFF' }]}>{item.userName}</Text>
          </TouchableOpacity>
          <Text style={styles.notificationText}>{item.text}</Text>
        </View>
        {item.postImage && <Image source={item.postImage} style={styles.postImage} />}
      </View>
      <View style={styles.separator} />
    </View>
  );

  return (
    <LinearGradient colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']} style={styles.container}>
      <TopBar navigation={navigation}/>

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>

        <Text style={styles.header2}>You have 4 notifications today</Text>

        <Text style={styles.todaySectionText}>Today</Text>
        {notificationsToday.map(renderItem)}

        <Text style={styles.thisWeekSectionText}>This week</Text>
        {notificationsThisWeek.map(renderItem)}
      </ScrollView>

      <BottomBar navigation={navigation}/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  header2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    padding: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'color: #007BFF',
    borderRadius: 10,
    margin: 5,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTextUser: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  notificationText: {
    color: 'black',
  },
  postImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#A19895',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  thisWeekSectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  todaySectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
});

export default NotificationsScreen;
