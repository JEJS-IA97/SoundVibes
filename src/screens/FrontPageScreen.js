import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const PortadaScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground source={require('..//assets/images/FrontPage.jpg')} style={styles.backgroundImage}>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default PortadaScreen;
