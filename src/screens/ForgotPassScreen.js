import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import CustomModal from '../components/CustomModal'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPassScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('ChangePass');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateInputs = () => {
    if (!email.trim()) {
      setErrorMessage('Email are required');
      return false;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Invalid email format');
      return false;
    }

    setErrorMessage('');
    return true;
  };
  
  return (
    <ImageBackground
      source={require('../assets/images/Password.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.title}>Forgot Your</Text>
          <Text style={styles.title}>Password</Text>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.title2}>Please enter the email address</Text>
          <Text style={styles.title3}>you'd like your password reset</Text>
          <Text style={styles.title4}>information sen to</Text>
          {errorMessage !== '' && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/icon/email-icon.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter email address"
              placeholderTextColor="white"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#FF4500' }]}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signUpLink}>Sign In</Text>
          </TouchableOpacity>
          <CustomModal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            title="Reset Password"
            description="An email wtih pasword reset instruction has been sent to your email address."
            buttonText="CONTINUE"
          />
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
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title3: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title4: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
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
    marginTop: 10,
    fontFamily: 'Roboto',
  },
});

export default ForgotPassScreen;
