import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

const Thumbnail = ({ image, title, onPress }) => (
  <TouchableOpacity style={styles.thumbnail} onPress={onPress}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  thumbnail: {
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default Thumbnail;
