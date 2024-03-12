import React from 'react';
import { View, Text, Image } from 'react-native';

const PostScreen = ({ post }) => (
  <View style={styles.postWindow}>
    <Text style={styles.title}>{post.title}</Text>
    <Image source={{ uri: post.image }} style={styles.postImage} />
  </View>
);

const styles = {
  postWindow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
};

export default PostScreen;
