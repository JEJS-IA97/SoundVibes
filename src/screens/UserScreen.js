import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage';
import Icon from 'react-native-vector-icons/Ionicons';


const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
          <ProfileImage navigation={navigation}/>
          <View style={styles.profileContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>100</Text>
                <Text style={styles.statLabel}>Posts</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>10K</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>500</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>           
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="create-outline" size={24} color="black" />
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.button}>
              <Icon name="settings-outline" size={24} color="black" />
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.button}>
              <Icon name="log-out-outline" size={24} color="black" />
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>         
        </ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Soundvibe.png')}
            style={styles.image}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 35,
    marginRight: 35
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginLeft: 8,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 15
  },
  logoContainer: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserScreen;