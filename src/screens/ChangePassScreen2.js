import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileImage from '../components/ProfileImage';

const ChangePassScreen2 = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPass, setRepeatPass] = useState('')
  const [errorMessage, setErrorMessage] = useState('');


  const validateInputs = () => {
    if (!password.trim() || !newPassword.trim() || !repeatPass.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
  }
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
          <ProfileImage navigation={navigation}/>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Change Your Password</Text>

            {errorMessage !== '' && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Current Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your current password"
                placeholderTextColor="black"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>New Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your new password"
                placeholderTextColor="black"
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
            </View>
            <View style={styles.line}></View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Repeat New Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Repeat your new password"
                placeholderTextColor="black"
                value={repeatPass}
                onChangeText={(text) => setRepeatPass(text)}
              />
            </View>
            <View style={styles.line}></View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'gray' }]}
                onPress={handleContinue}
              >
                <Text style={styles.buttonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#FF4500' }]}
                onPress={handleContinue}
              >
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/Soundvibe.png')}
              style={styles.image}
            />
          </View> 
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 10
  },
  inputContainer: {
    marginBottom: 2,
    height: 50,
    width: '100%',
  },
  image: {
    width: 200,
    height: '100%',
  },
  logoContainer: {
    width: 200,
    height: 100,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: 'black',
    flex: 1,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
    textAlign: 'center',
  },

  label: {

    color: 'gray',
    fontSize: 12,
  },

      errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
      },
    logoContainer: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '11%',
    marginRight: '11%'
  },
  image: {
    width: 200,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChangePassScreen2;
