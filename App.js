import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StatusBar } from 'react-native';
import FrontPageScreen from './src/screens/FrontPageScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignUpScreen2 from './src/screens/SignUpScreen2';
import ForgotPassScreen from './src/screens/ForgotPassScreen';
import ChangePassScreen from './src/screens/ChangePassScreen';
import SignUpAlterScreen from './src/screens/SignUpAlterScreen';
import FeedScreen from './src/screens/FeedScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import UserScreen from './src/screens/UserScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ChangePassScreen2 from './src/screens/ChangePassScreen2';
import NotificationsScreen from './src/screens/NotificationsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import SearchScreen from './src/screens/SearchScreen';
import UserScreen2 from './src/screens/UserScreen2';
import UserScreen3 from './src/screens/UserScreen3';
import UserScreen4 from './src/screens/UserScreen4';
import PostScreen from './src/screens/PostScreen';
import BottomBar from './src/components/BottomBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomBarScreens = () => {
  return (
    <Tab.Navigator tabBar={() => <BottomBar />}
    screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notification" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FrontPage" component={FrontPageScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SignUp2" component={SignUpScreen2} />
          <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
          <Stack.Screen name="ChangePass" component={ChangePassScreen} />
          <Stack.Screen name="Alternative" component={SignUpAlterScreen} />
          <Stack.Screen name="User2" component={UserScreen2} />
          <Stack.Screen name="User3" component={UserScreen3} />
          <Stack.Screen name="User4" component={UserScreen4} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ gestureEnabled: false }}
        />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="ChangePass2" component={ChangePassScreen2} />
          
          <Stack.Screen name="BottomBarScreens" component={BottomBarScreens} screenOptions={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;