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
    <View style={styles.container}>
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
          require={true}
          
        />
    <View>
    <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry={true}
              require={true}
            />
    <Button title="Connect" onPress={handleIdentifiant} style={styles.button}/>
          </View>
  </View>
      </View>
      </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
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