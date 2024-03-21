import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Text, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

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
      <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
        <Icon name="heart" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Icon name="notifications" size={25} color="white" />
      </TouchableOpacity>

      
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddPostModalVisible}
        onRequestClose={toggleAddPostModal}
      >
       <View style={styles.modalContainer}>
    <TouchableOpacity onPress={toggleAddPostModal} style={styles.closeIcon}>
      <Icon name="close" size={25} color="black" />
    </TouchableOpacity>
    <View style={styles.separator} />

    <View style={styles.header}>
    <LinearGradient
                    colors={['#87CEEB', '#FFA500', '#FF4500']}
                    style={styles.profileImageContainer}
                  >
      <Image source={require('../assets/images/Jhon.jpeg')} style={styles.circularImage} />
      </LinearGradient>
      <Text>   | What are you listening to?</Text>
    </View>

          <TextInput
            style={styles.largeInput}
            placeholder=""
            multiline={true}
          />
          <TouchableOpacity style={styles.attachIconContainer}>
         <Image source={require('../assets/icon//image.png')} style={styles.attachIcon} />
         </TouchableOpacity>

          <View style={styles.separator} />

          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoRow}>
              <Text style={styles.additionalInfoText}>Título:</Text>
              <TextInput style={styles.additionalInfoInput} placeholder="Título" />
            </View>

            <View style={styles.additionalInfoRow}>
              <Text style={styles.additionalInfoText}>Género:</Text>
              <TextInput style={styles.additionalInfoInput} placeholder="Género" />
            </View>

            <View style={styles.additionalInfoRow}>
              <Text style={styles.additionalInfoText}>Año:</Text>
              <TextInput style={styles.additionalInfoInput} placeholder="Año" />
            </View>
          </View>

          <View style={styles.iconColumn}>
            <View style={styles.musicServiceIconContainer}>
              <Image source={require('../assets/icon/spotify.png')} style={styles.musicServiceIcon} />
              <TextInput style={styles.musicServiceInput} placeholder="Spotify" />
            </View>

            <View style={styles.musicServiceIconContainer}>
              <Image source={require('../assets/icon/youtube.png')} style={styles.musicServiceIcon} />
              <TextInput style={styles.musicServiceInput} placeholder="YouTube" />
            </View>

            <View style={styles.musicServiceIconContainer}>
              <Image source={require('../assets/icon/soundcloud.png')} style={styles.musicServiceIcon} />
              <TextInput style={styles.musicServiceInput} placeholder="SoundCloud" />
            </View>
          </View>

          <View style={styles.separator} />

          <TouchableOpacity onPress={handleAddPost} style={styles.publishButton}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>SHARE</Text>
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
    marginTop: 120,
    width: '85%',
    height: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
  },
  circularImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  largeInput: {
    width: '80%',
    height: 100,
    padding: 10,
  },
  additionalInfoContainer: {
    width: '80%',
    marginBottom: 10,
    paddingLeft: 30,
  },
  additionalInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  additionalInfoText: {
    fontWeight: 'bold',
  },
  additionalInfoInput: {
    flex: 1,
    height: 25,
    marginLeft: 10,
    padding: 5,
  },
  iconColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  musicServiceIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  musicServiceInput: {
    height: 25,
    marginLeft: 10,
    padding: 5,
    width: '68%',
  },

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,

  },

  musicServiceIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  separator: {
    height: 1,
    backgroundColor: '#A19895',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 7,
  },

  closeIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },

  publishButton: {
    width:80,
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 10,
    fontWeight: 'bold', 
  },

  attachIconContainer: {
    width: 20,
    height: 20,
    paddingLeft: 265,
  },

  attachIcon: {
    width: 20,
    height: 20,
  },

  profileImageContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

});

export default BottomBar;
