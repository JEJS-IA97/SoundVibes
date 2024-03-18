import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TopBar = ({ navigation }) => {
  const userProfileImage = require('../assets/images/Jhon.jpeg');

  return (
    <View style={styles.container}>
  
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      <LinearGradient
        colors={['#87CEEB', '#FFA500', '#FF4500']}
        style={styles.userProfileContainer}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={userProfileImage} style={styles.userProfileImage} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'black',
  },
  logo: {
    width: 100,
    height: '100%',
    
  },
  userProfileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  userProfileImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 18, 
  },
});

export default TopBar;