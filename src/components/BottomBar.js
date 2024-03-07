import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomBar = ({ navigation }) => {
  const [isAddPostModalVisible, setAddPostModalVisible] = useState(false);

  const toggleAddPostModal = () => {
    setAddPostModalVisible(!isAddPostModalVisible);
  };

  const handleAddPost = () => {
    toggleAddPostModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Icon name="home" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddPost}>
        <Icon name="add-circle" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Icon name="heart" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={25} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddPostModalVisible}
        onRequestClose={toggleAddPostModal}
      >
        <View style={styles.modalContainer}>
          <Text>Formulario de Publicación</Text>

          <TouchableOpacity onPress={toggleAddPostModal}>
            <Text>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    height: '45%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255,255, 1)',
  },
});

export default BottomBar;
