import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { registerUser } from '../services/authService';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(email, password, registerUser);
      // Naviger til neste skjerm eller vis suksessmelding
    } catch (error) {
      // Håndter feil, f.eks. vis en feilmelding
    }
  };

  return (
    <View>
      <TextInput
        placeholder="E-post"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Passord"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Registrer" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;