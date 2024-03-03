import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';

const SignUpScreen2 = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [telefono, setTelefono] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    if (!nombre.trim() || !apellido.trim() || !genero || !fechaNacimiento || !telefono.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }

    if (!isValidPhoneNumber(telefono)) {
      setErrorMessage('Invalid phone number');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleContinue = () => {
    if (!validateInputs()) {
      return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(telefono)) {
      return;
    }};

  
  return (
    <ImageBackground
      source={require('../assets/images/Data.jpg')}
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

        <Text style={styles.title2}>Please enter the</Text>
        <Text style={styles.title3}>following information</Text>
        {errorMessage !== '' && (
          <Text style={styles.errorText}>{errorMessage}</Text>
        )}
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

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF4500' }]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  title3: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginBottom: 20,

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
    color: 'white',
    flex: 1,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 8,
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
    height: 45,
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
        height: 45,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input2: {
        height: 45,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: 'white',
        flex: 1,
      },
      errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
      },
});

export default SignUpScreen2;
