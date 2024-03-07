import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import Publication from '../components/Publication';

const FeedScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
      style={styles.container}
    >
      <TopBar />
      <ScrollView>
        <Publication imagen="url_imagen_1" descripcion="Descripción de la publicación 1" />
        <Publication imagen="url_imagen_2" descripcion="Descripción de la publicación 2" />
      </ScrollView>
      <BottomBar navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedScreen;
