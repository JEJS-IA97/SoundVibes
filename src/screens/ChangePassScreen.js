import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import CustomModal from '../components/CustomModal'; 

const ChangePassScreen = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
    savePasswordToStorage(newPassword); 
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate('SignIn');
  };

  const validateInputs = () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  return (
    <ImageBackground
      source={require('../assets/images/Change.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Change Your</Text>
        <Text style={styles.title}>Password</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title2}>Please create a new password</Text>
        <Text style={styles.title3}>that you don't use on only site</Text>
        {errorMessage !== '' && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/icon/password-icon.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="New password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/icon/password-icon.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF4500' }]}
        onPress={handleContinue}
        >
          <Text style={styles.buttonText}>CHANGE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signUpLink}>Sign In</Text>
        </TouchableOpacity>
        {isModalVisible && (
            <CustomModal
              isVisible={isModalVisible}
              onClose={handleCloseModal}
              title="Password Changed!"
              description="Your password has been changed successfully."
              buttonText="CONTINUE"
            />
          )}
       </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title2: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title3: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    width: '100%',
    justifyContent: 'center',
    marginTop: 5,
  },
  icon: {
    marginTop:8,
    width: 20,
    height: 20,
  },

  image: {
    width: 300,
    height: '100%',
  },

  logoContainer: {
    width: 300,
    height: 100,
    marginBottom: 25,
    marginTop: 40,
  },

  input: {
    height: 35,
    borderColor: 'transparent',
    borderWidth: 1,
    marginBottom: 5,
    padding: 8,
    backgroundColor: 'transparent',
    borderRadius: 4,
    color: 'white',
    flex: 1,
    
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
 
  signUpText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  signUpLink: {
    color: '#FF4500',
    fontWeight: 'bold',
    marginLeft: 5, 
    marginTop: 45,
    paddingTop: 15,
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },

});

export default ChangePassScreen;