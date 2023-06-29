import React, { useState } from 'react'
import { View, Button, TextInput,Text,StyleSheet  } from 'react-native';


const Login = (handleEmailPasswordSubmit) => {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  


  const handleIdentifiant = () => {
    // Logique pour valider le prénom et passer à l'étape suivante
    setStep(2);
  };

  return (
    <View>
    <Text style={styles.title}>Welcome Back</Text> 
    <Text style={styles.text}>Please enter your school e-mail and password</Text>    
    <TextInput
      placeholder="School e-mail or username"
      value={identifiant}
      onChangeText={text => setIdentifiant(text)}
      style={styles.input}
    />
    <Button title="Next" onPress={handleIdentifiant} style={styles.button}/>
    <View>
    <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
            />
            <Button title="Validate" onPress={handleEmailPasswordSubmit} style={styles.button}/>
          </View>
  </View>
);
};

const styles = StyleSheet.create({
buttonContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login