import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [step, setStep] = useState(1); // Étape du formulaire : 1 pour le prénom, 2 pour le nom de famille, etc.

  const handleFirstNameSubmit = () => {
    // Logique pour valider le prénom et passer à l'étape suivante
    setStep(2);
  };

  const handleLastNameSubmit = () => {
    // Logique pour valider le nom de famille et passer à l'étape suivante
    setStep(3);
  };

  const handleUsernameSubmit = () => {
    // Logique pour valider l'identifiant et passer à l'étape suivante
    setStep(4);
  };

  const handleSchoolNameSubmit = () => {
    // Logique pour valider le nom de l'école et passer à l'étape suivante
    setStep(5);
  };

  const handlePhoneNumberSubmit = () => {
    // Logique pour valider le numéro de téléphone et passer à l'étape suivante
    setStep(6);
  };

  const handleEmailPasswordSubmit = () => {
    // Logique pour valider l'adresse e-mail et le mot de passe et passer a l'étape suivante
    setStep(7);
  };
  const handleConfirmationCode = () => {
    // Logique pour valider le numero de téléphone puis effectuer la validation du compte
    setStep(8);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore your new nightlife 2.0</Text> 
      <Text style={styles.text}>Create your account to be badass</Text>    
      <View style={styles.container1}>
        {step === 1 && (
          <View>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Please enter your first name</Text>  
            <View style={styles.arrowContainer}>
              <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}
                style={styles.input}
                />
                <TouchableHighlight onPress={handleFirstNameSubmit} >
                <AntDesign name="right" size={40} color="black" />
                </TouchableHighlight>
              </View>  
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Please enter your last name</Text>   
            <View style={styles.arrowContainer}>
 
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={text => setLastName(text)}
              style={styles.input}
            />
            <TouchableHighlight title="Next" onPress={handleLastNameSubmit}>
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Choose your username</Text>  
            <View style={styles.arrowContainer}>
  
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.input}
            />
            <TouchableHighlight title="Next" onPress={handleUsernameSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {step === 4 && (
          <View>
            <Text style={styles.title}>Going to school ?</Text> 
            <Text style={styles.text}>Please enter the name of your school</Text>  
            <View style={styles.arrowContainer}>
  
            <TextInput
              placeholder="Name of the school"
              value={schoolName}
              onChangeText={text => setSchoolName(text)}
              style={styles.input}
            />
            <TouchableHighlight title="Next" onPress={handleSchoolNameSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {step === 5 && (
          <View>
            <Text style={styles.title}>Secure your account</Text> 
            <Text style={styles.text}>Please enter your phone number</Text> 
            <View style={styles.arrowContainer}>

            <TextInput
              placeholder="Phone number +33"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              style={styles.input}
            />
            <TouchableHighlight title="Next" onPress={handlePhoneNumberSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {step === 6 && (
          <View>
            <Text style={styles.title}>One step away… </Text> 
            <Text style={styles.text}>Please enter your school e-mail and password</Text>  

  
            <TextInput
              placeholder="School e-mail"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
            />
            <Button title="Validate" onPress={handleEmailPasswordSubmit} style={styles.button}/>

          </View>
        )}
        {step === 7 && (
          <View>
            <Text style={styles.title}>Confirmation Code</Text> 
            <Text style={styles.text}>Enter the 6 digit validation code </Text>  
            <View style={styles.arrowContainer}>

            <TextInput
              placeholder="xxxxxx"
              value={confirmationCode}
              onChangeText={text => setConfirmationCode(text)}
              style={styles.input}
            />
            <TouchableHighlight title="Next" onPress={handleConfirmationCode} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}
        {step === 8 && (
          <View>
            <Text style={styles.title}>Perfect</Text> 
            <Text style={styles.text}>You successfully created your account ! Welcome {firstName}</Text>   
            <View style={styles.buttonContainer}>
 
            <Button title="Discover" onPress={handleConfirmationCode} style={styles.button}/>
            <Button title="Edit Profile" onPress={handleConfirmationCode} style={styles.edit}/>
            </View>
          </View>
        )}
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderRadius: 50,
  },
  arrowContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Register;
