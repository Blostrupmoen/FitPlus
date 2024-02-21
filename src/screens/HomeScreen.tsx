import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/navigation';
import { signInUser } from '../services/authService';
import RegisterScreen from './RegisterScreen';
// Antar at signInUser er korrekt importert fra dine tjenester

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type MainTabsNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinueAsGuest = () => {
    navigation.navigate('MainTabs');
  };

  const handleLogin = async () => {
    try {
      await signInUser(email, password, RegisterScreen); // Oppdatert til å bruke state-variablene
      navigation.navigate('MainTabs'); // Naviger til hovedtabs etter vellykket innlogging
    } catch (error) {
      console.error(error);
      alert("Innlogging feilet");
    }
  };


  const handleTestLogin = async () => {
    // Forhåndsdefinerte testverdier
    const testEmail = 'test@example.com';
    const testPassword = 'password123';
    try {
      await signInUser(testEmail, testPassword, HomeScreen); // Bruker testverdiene for innlogging
      navigation.navigate('MainTabs');
    } catch (error) {
      console.error(error);
      alert("Testinnlogging feilet");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til FitPlus!</Text>
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
      <Button
        title="Fortsett som gjest"
        onPress={handleContinueAsGuest}
      />
      <Button
        title="Logg inn / Registrer deg"
        onPress={handleLogin}
      />

    <Button
        title="Testinnlogging"
        onPress={handleTestLogin}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen;
