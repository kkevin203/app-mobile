import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import NuageBlue from '../assets/svg/nuageblue';
import { AntDesign } from '@expo/vector-icons'; 
import * as yup from 'yup';



const Register = () => {
  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    userName : '',
    schoolName: '',
    schoolYear: '',
    phoneNumber : '',
    email : '',
    password : '',
    confirmationCode : '',
    step: 1, 
});
 const [validationErrors, setValidationErrors] = useState({});   

 const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    userName: yup.string().required('Username is required'),
    schoolName: yup.string().required('School name is required'),
    schoolYear: yup.string().required('School year is required'),
    phoneNumber: yup.number().required('Phone number is required'),
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmationCode: yup.number().required('Confirmation code is required'),
  });
  
   const handleValidation = async (data, schema, nextStep) => {
    try {
      await schema.validate(data);
      setFormData((prevData) => ({ ...prevData, step: nextStep }));
      setValidationErrors({});
    } catch (error) {
      const errors = error.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setValidationErrors(errors);
    }
  };
  const handleStepSubmit = async () => {
    if (formData.firstName !== '') {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      userName: formData.userName,
      schoolName: formData.schoolName,
      schoolYear: formData.schoolYear,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      confirmationCode: formData.confirmationCode,
    };

    await handleValidation(data, validationSchema, formData.step + 1);
  setFormData((prevData) => ({ ...prevData, step: formData.step + 1 }));
  setValidationErrors({});
  }
  };

  return (
    <View style={styles.container}>
            <NuageBlue />
      <Text style={styles.title}>Explore your new nightlife 2.0</Text> 
      <Text style={styles.text}>Create your account to be badass</Text>    
      <View style={styles.container1}>
        {formData.step === 1 && (
          <View style={styles.Register}>
            <Text style={styles.emoji}> &#x1f44b;</Text>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Please enter your first name</Text>  
            <View style={styles.arrowContainer}>
              <TextInput
                placeholder="First Name"
                value={formData.firstName}
                onChangeText={text => setFormData(prevData => ({ ...prevData, firstName: text }))}
                style={styles.input}
                />
                {validationErrors.firstName && (
                  <Text style={styles.errorText}>{validationErrors.firstName}</Text>
                )}
                <TouchableHighlight onPress={handleStepSubmit} >
                <AntDesign name="right" size={40} color="black" />
                </TouchableHighlight>
              </View>  
          </View>
        )}

        {formData.step === 2 && (
          
            <View style={styles.Register}>
            <Text style={styles.emoji}> &#x1F440;</Text>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Please enter your last name</Text>   
            <View style={styles.arrowContainer}>
 
            <TextInput
              placeholder="Last Name"
              value={formData.lastName}
              onChangeText={text => setFormData(prevData => ({ ...prevData, lastName: text }))}
              style={styles.input}
            />
             {validationErrors.lastName && (
                  <Text style={styles.errorText}>{validationErrors.lastName}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit}>
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {formData.step === 3 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#x1F440;</Text>
            <Text style={styles.title}>Welcome</Text> 
            <Text style={styles.text}>Choose your username</Text>  
            <View style={styles.arrowContainer}>
  
            <TextInput
              placeholder="Username"
              value={formData.userName}
              onChangeText={text => setFormData(prevData => ({ ...prevData, userName: text }))}
              style={styles.input}
            />
             {validationErrors.userName && (
                  <Text style={styles.errorText}>{validationErrors.userName}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {formData.step === 4 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#127979;</Text>
            <Text style={styles.title}>Going to school ?</Text> 
            <Text style={styles.text}>Please enter the name of your school</Text>  
            <View style={styles.arrowContainer}>
  
            <TextInput
              placeholder="Name of the school"
              value={formData.schoolName}
              onChangeText={text => setFormData(prevData => ({ ...prevData, schoolName: text }))}
              style={styles.input}
            />
             {validationErrors.schoolName && (
                  <Text style={styles.errorText}>{validationErrors.schoolName}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}
        {formData.step === 5 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#127979;</Text>
            <Text style={styles.title}>Where are you in your studies? </Text> 
            <Text style={styles.text}>What year are you in ? </Text>  
            <View style={styles.arrowContainer}>
  
            <TextInput
              placeholder="First Year "
              value={formData.schoolYear}
              onChangeText={text => setFormData(prevData => ({ ...prevData, schoolYear: text }))}
              style={styles.input}
            />
             {validationErrors.schoolYear && (
                  <Text style={styles.errorText}>{validationErrors.schoolYear}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {formData.step === 6 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#127979;</Text>
            <Text style={styles.title}>Secure your account</Text> 
            <Text style={styles.text}>Please enter your phone number</Text> 
            <View style={styles.arrowContainer}>

            <TextInput
              placeholder="Phone number +33"
              value={formData.phoneNumber}
              onChangeText={text => setFormData(prevData => ({ ...prevData, phoneNumber: text }))}
              style={styles.input}
            />
             {validationErrors.phoneNumber && (
                  <Text style={styles.errorText}>{validationErrors.phoneNumber}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}

        {formData.step === 7 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#x1F600;</Text>
            <Text style={styles.title}>One step away… </Text> 
            <Text style={styles.text}>Please enter your school e-mail and password</Text>  

  
            <TextInput
              placeholder="School e-mail"
              value={formData.email}
              onChangeText={text => setFormData(prevData => ({ ...prevData, email: text }))}
              style={styles.input}
            />
             {validationErrors.email && (
                  <Text style={styles.errorText}>{validationErrors.email}</Text>
                )}
            <TextInput
              placeholder="Password"
              value={formData.password}
              onChangeText={text => setFormData(prevData => ({ ...prevData, password: text }))}
              style={styles.input}
            />
             {validationErrors.password && (
                  <Text style={styles.errorText}>{validationErrors.password}</Text>
                )}
            <Button title="Validate" onPress={handleStepSubmit} style={styles.button}/>

          </View>
        )}
        {formData.step === 8 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}> &#x1f44b;</Text>
            <Text style={styles.title}>Confirmation Code</Text> 
            <Text style={styles.text}>Enter the 6 digit validation code </Text>  
            <View style={styles.arrowContainer}>

            <TextInput
              placeholder="xxxxxx"
              value={formData.confirmationCode}
              onChangeText={text => setFormData(prevData => ({ ...prevData, confirmationCode: text }))}
              style={styles.input}
            />
             {validationErrors.confirmationCode && (
                  <Text style={styles.errorText}>{validationErrors.confirmationCode}</Text>
                )}
            <TouchableHighlight title="Next" onPress={handleStepSubmit} >
            <AntDesign name="right" size={40} color="black" />
            </TouchableHighlight>
          </View>
          </View>
        )}
        {formData.step === 9 && (
                  <View style={styles.Register}>
                  <Text style={styles.emoji}>&#10004;&#65039;</Text>
            <Text style={styles.title}>Perfect</Text> 
            <Text style={styles.text}>You successfully created your account ! Welcome {formData.firstName}</Text>   
            <View style={styles.buttonContainer}>
 
            <Button title="Discover" onPress={handleStepSubmit} style={styles.button}/>
            <Button title="Edit Profile" onPress={handleStepSubmit} style={styles.edit}/>
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
  emoji:{
    fontSize:40,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text:{
    marginBottom: 20,
  },
  Register:{
justifyContent: "center",
alignItems:"center",
margin: 20,
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
  errorText: {
    color: 'red',
  }
});

export default Register;
