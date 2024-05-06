import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import ProfileImage from '../components/ProfileImage';
import CustomModal from '../components/CustomModal'; 

import { getUser } from '../api/User';
import { getUserLogged } from '../api/Auth';
import { updateUser } from '../api/User';

const SignUpScreen2 = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [phone, setPhone] = useState('');


  const loadUserData = async () => {
    try {
      const response = await getUserLogged();
      const userData = response.data.Data;
      const userId = userData.id;   
      
      const userResponse = await getUser(userId);
      const user = userResponse.Data;

      setUsername(user.username);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setGender(user.gender);
      setPhone(user.phone);


    } catch (error) {
      console.log(error);
      console.error('Error al cargar los datos del usuario:', error);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setBirthday(date);
    hideDatePicker();
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return phoneNumber.length >= 10;
  };
  

  const validateInputs = () => {
    if (!firstName.trim() || !lastName.trim() || !gender || !birthday || !phone.trim()) {
      setErrorMessage('All fields are required');
      return false;
    }

    if (!isValidPhoneNumber(phone)) {
      setErrorMessage('Invalid phone number');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleCancel = () => {
    navigation.goBack(); 
  };
  
  const handleSave = async () => {
    if (!validateInputs()) {
      return;
    }
    
    try {
      const response = await getUserLogged();
      const userId = response.data.Data.id; 

      const updatedUserData = {
        id: userId,
        username,
        firstName,
        lastName,
        gender,
        birthday,
        phone
      };
      
      await updateUser(userId, updatedUserData);
      console.log(updatedUserData);
      setIsModalVisible(true);
    } catch (error) {
      console.log(error);
      console.error('Error al actualizar el usuario:', error);
      // Manejar el error según sea necesario
    }
  };
  

  const handleCloseModal = () => {
    setIsModalVisible(false);
    navigation.navigate('User'); 
  };

  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(135, 206, 235, 0.4)', 'rgba(255, 69, 0, 0.4)']}
        style={styles.container}
      >
        <ScrollView>
          <ProfileImage navigation={navigation}/>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Edit Profile</Text>

            {errorMessage !== '' && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                placeholderTextColor="black"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                placeholderTextColor="black"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            </View>
            <View style={styles.line}></View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                placeholderTextColor="black"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
            </View>
            <View style={styles.line}></View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gender</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  style={styles.input2}
                  onValueChange={(itemValue) => setGender(itemValue)}
                >
                  <Picker.Item label="Select your gender" value="" color="black" />
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
                    {birthday ? birthday.toLocaleDateString('es-ES') : 'Select your date of birth'}
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
                placeholder="Enter your phone"
                placeholderTextColor="black"
                value={phone}
                onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.line}></View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'gray' }]}
                onPress={handleCancel}
              >
                <Text style={styles.buttonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#FF4500' }]}
                onPress={handleSave}
              >
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
          {isModalVisible && (
        <CustomModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title="Update Successful"
        description="Your account has been successfully updated."
        buttonText="CONTINUE"
      />
      )}
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

    color: 'gray',
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
    color: 'black',
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
        color: 'black',
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