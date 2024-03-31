import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import CustomModal from '../components/CustomModal'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUpAlterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [telefono, setTelefono] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setFechaNacimiento(date);
    hideDatePicker();
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return phoneNumber.length >= 10;
  };
  

  const validateInputs = () => {
    if (!username.trim() || !password.trim() || !email.trim() || !nombre.trim() || !apellido.trim() || !genero || !fechaNacimiento || !telefono.trim()|| !confirmPassword.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }

    if (!isValidPhoneNumber(telefono)) {
      setErrorMessage('Invalid phone number');
      return false;
    }

    if (!isValidEmail(email)) {
        setErrorMessage('Invalid email format');
        return false;
      }

    setErrorMessage('');
    return true;
  };

  const handleContinue = async () => {
    if (!validateInputs()) {
      return;
    }
  
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(telefono)) {
      return;
    }
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
  };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
  
      const handleCloseModal = () => {
        setIsModalVisible(false);
        navigation.navigate('SignIn'); 
      };

  return (
    <ImageBackground
      source={require('../assets/images/Data.jpg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.title2}>Please enter the following information</Text>
        {errorMessage !== '' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="white"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="white"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            placeholderTextColor="white"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            placeholderTextColor="white"
            value={apellido}
            onChangeText={(text) => setApellido(text)}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={genero}
              style={styles.input2}
              onValueChange={(itemValue) => setGenero(itemValue)}
            >
              <Picker.Item label="Select your gender" value="" color="white" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Birthday</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <View style={styles.datePickerContainer}>
              <Text style={styles.datePickerText}>
                {fechaNacimiento ? fechaNacimiento.toLocaleDateString('es-ES') : 'Select your date of birth'}
              </Text>
            </View>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="white"
            value={telefono}
            onChangeText={(text) => setTelefono(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.line}></View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input2}
            placeholder="Enter your password"
            placeholderTextColor="white"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line2}></View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input2}
              placeholder="Confirm your password"
              placeholderTextColor="white"
              value={confirmPassword}
              secureTextEntry={!showConfirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIconContainer}>
              <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line2}></View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF4500' }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      {isModalVisible && (
        <CustomModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title="Registration Successful"
        description="Your account has been successfully registered."
        buttonText="CONTINUE"
      />
      )}
      
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
    width: '120%',
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
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingBottom: 7,
  },
  inputContainer: {
    marginBottom: 3,
    height: 45,
    width: '100%',
  },
  input: {
    height: 30,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
  },
  input2: {
    height: 25,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 6,
  },

  line2: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 6,
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
    marginTop: 1,
    paddingTop: 15,
  },
  label: {

    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },

  datePickerContainer: {
    height: 40,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  datePickerText: {
    color: 'white',
    flex: 1,
  },
    pickerContainer: {
        height: 40,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
      errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        width: '100%',
      },
      eyeIconContainer: {
        position: 'absolute',
        right: 10,
      },
      
});

export default SignUpAlterScreen;
