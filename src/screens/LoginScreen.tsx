import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInUser } from '../services/authService'; // Adjust import path as needed
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      await signInUser(email, password, navigation);
    } catch (error) {
      console.error(error);
      alert("Innlogging feilet");
    }
  };


  const handleContinueAsGuest = () => {
   
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="E-post"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Passord"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Logg inn" onPress={handleLogin} />
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        Ny her? Registrer deg.
      </Text>

      <Button
        title="Fortsett som gjest"
        onPress={handleContinueAsGuest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  registerText: {
    marginTop: 15,
    color: 'blue',
  }
});

export default LoginScreen;
