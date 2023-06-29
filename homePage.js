import React, { useState } from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register')
  };

  return (
    <View style={styles.container}>
  <View style={styles.container1}>
      <Text style={styles.title}>Explore your new nightlife 2.0</Text>
      <Text style={styles.text}>You know what’s cooler than party? Keep your memories all the way after</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  container1:{
    
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 30,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    marginLeft: 30,
    marginBottom: 15,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    loginButton: {
        height: 40,
        width: 200,
        borderBottomStartRadius: 0,
        borderTopStartRadius: 0,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: '#5C84E8',
        justifyContent: 'center',
        alignItems: 'center',
      },
      registerButton: {
        height: 40,
        width: 200,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default HomePage;
