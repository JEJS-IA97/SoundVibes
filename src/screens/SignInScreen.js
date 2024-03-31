import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BackHandler } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [navigation]); 

  const handleLogin = () => {
    if (!validateInputs()) {
      return;
    }
    navigation.replace('BottomBarScreens', { screen: 'Feed' });
  };

  const validateInputs = () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPass');
  };

  const handleSignUp = () => {
    navigation.navigate('Alternative');
  };

  return (
    <ImageBackground
      source={require('../assets/images/SignIn.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.select({ ios: 0, android: 50 })}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title2}>Welcome</Text>
        <Text style={styles.title3}>Back!</Text>
        {errorMessage !== '' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/icon/user-icon.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={(text) => setUsername(text)}
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
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} color="white" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF4500' }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
        <View style={styles.containerForgot}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={[styles.forgotPassword, { marginLeft: 'auto' }]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </Text>
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
    backgroundColor: 'transparent'
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
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  title3: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 20,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    width: '100%',
    justifyContent: 'center',
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold', 
    fontFamily: 'Roboto',
  },
  forgotPassword: {
    color: 'white',
    fontSize: 14,
    marginTop: 30,
    fontFamily: 'Roboto',
  },
  signUpText: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  containerForgot: {
    alignItems: 'flex-end',
    marginLeft: 170,
  },
  signUpLink: {
    color: '#FF4500',
    fontWeight: 'bold',
    marginLeft: 5, 
    marginTop: 1,
    paddingTop: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    paddingTop: 5
  },
});

export default SignInScreen;
