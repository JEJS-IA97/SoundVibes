import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TopBar = () => {
  const userProfileImage = require('../assets/images/John.jpg');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.logo}
      />

      <LinearGradient
        colors={['#87CEEB', '#FFA500', '#FF4500']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.userProfileContainer}
      >
        <TouchableOpacity>
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
    borderColor: 'transparent', 
  },
  userProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 18, 
  },
});

export default TopBar;