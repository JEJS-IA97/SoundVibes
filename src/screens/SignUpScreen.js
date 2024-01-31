import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    Console.log('Email:', email);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title2}>Welcome</Text>
        <Text style={styles.title3}>Create Your Account</Text>
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
            source={require('../assets/icon/email-icon.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.line}></View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF4500' }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
        Already a member? {' '}
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signUpLink}>Sign In</Text>
        </TouchableOpacity>
      </Text>
      </View>
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
    width: '90%',
    padding: 16,
    backgroundColor: 'transparent',
    borderRadius: 18,
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1.2,
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
    fontSize: 17,
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
    justifyContent: 'center'
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

});

export default SignUpScreen;