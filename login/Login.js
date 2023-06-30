import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput,Text,StyleSheet  } from 'react-native';
import NuageBlue from '../assets/svg/nuageblue';

const Login = () => {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  
  const handleForgottenPassword = () => {
    // Logique pour gérer l'action du mot de passe oublié
  };

  const handleIdentifiant = () => {
    // Logique pour valider le prénom et passer à l'étape suivante
    setStep(2);
  };

  return (
    <View style={styles.container}>
      <NuageBlue />
      <View style={styles.container1}>
      <View style={styles.login}>
        <Text style={styles.emoji}> &#x1F600;</Text>

        <Text style={styles.title}>Welcome Back</Text> 
        <Text style={styles.text}>Please enter your school e-mail and password</Text>    
        <TextInput
          placeholder="School e-mail or username"
          value={identifiant}
          onChangeText={text => setIdentifiant(text)}
          style={styles.input}
          required={true}
          
        />
    <View>
    <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry={true}
              required={true}
            />
           <TouchableOpacity onPress={handleForgottenPassword}>
  <Text style={styles.password}>Forgotten Password ?</Text>
</TouchableOpacity>
              </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleIdentifiant}
            >
              <Text style={styles.buttonText}>Connect</Text>
            </TouchableOpacity>  
  </View>
      </View>
      </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBF5',
    justifyContent: 'flex-end',
  },
  container1: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 20,
  },
  svgImage: {
    position: 'absolute',
    width: 369.494,
    height: 346.344,
    color: '#5C84E8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text:{
    marginBottom: 20,
  },
  emoji:{
    fontSize:40,
    
  },
  login:{
    justifyContent: "center",
    alignItems:"center",
    margin: 20,
      },
password:{
  color: 'blue',
justifyContent: 'flex-end',
textAlign: 'right', 
cursor: 'pointer',

      },
buttonContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
    width: 150,
    backgroundColor: '#5C84E8',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login