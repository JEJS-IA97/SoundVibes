import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

const Thumbnail = ({ image, onPress }) => (
  <TouchableOpacity style={styles.postItem} onPress={onPress}>
    <Image source={image} style={styles.postImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  postItem: {
    margin: 10,
  },
  postImage: {
    width: 100,
    height: 100,
  },
});

export default Thumbnail;
