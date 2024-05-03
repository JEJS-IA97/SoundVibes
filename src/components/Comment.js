import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Comments = () => {
  const [commentContent, setCommentContent] = useState('');

  const postComment = () => {
    console.log('Comment posted:', commentContent);
    setCommentContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write a comment..."
        onChangeText={(text) => setCommentContent(text)}
        value={commentContent}
      />
      <TouchableOpacity onPress={postComment} style={styles.button}>
        <Icon name="send" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
  },
});

export default Comments;
