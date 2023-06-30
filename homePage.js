import React, { useState } from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Nuage from "./assets/svg/nuage";
import { LinearGradient} from 'expo-linear-gradient';

const HomePage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register')
  };

  return (
   
    <><View style={styles.container}>
      <LinearGradient
        colors={['#232328', '#2C3064']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient} />
      <SvgUri
        width={369.494}
        height={346.344}
        uri="./assets/svg/nuage.svg"
        style={styles.svgImage} />
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
    <View style={styles.container1}>
      </View></>
    
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  svgImage: {
    position: 'absolute',
    width: 369.494,
    height: 346.344,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  container1: {

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
});

export default HomePage;
