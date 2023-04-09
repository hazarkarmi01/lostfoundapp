import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './views/RegisterScreen';
import LoginScreen from './views/LoginScreen';
import MainScreen from './views/MainScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
