import { auth } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Registrer en ny bruker med e-post og passord
export const registerUser = async (email: string, password: string, navigation: any) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Bruker registrert: ", userCredential.user);
    // Naviger til en annen skjerm etter vellykket registrering
    navigation.navigate('HomeScreen'); // Erstatt 'HomeScreen' med faktisk målskjerm
  } catch (error) {
    console.error("Feil ved registrering: ", error);
    // Her kan du sette en feilmelding i appens tilstand, 
    // eller bruke en alert for å informere brukeren om feilen
    alert(error); // Enkel måte å vise feilmelding på
  }
};

// Logg inn en eksisterende bruker med e-post og passord
export const signInUser = async (email: string, password: string, navigation: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Bruker pålogget: ", userCredential.user);
    // Naviger til en annen skjerm etter vellykket innlogging
    navigation.navigate('HomeScreen'); // Erstatt 'HomeScreen' med faktisk målskjerm
  } catch (error) {
    console.error("Feil ved innlogging: ", error);
    // Her kan du sette en feilmelding i appens tilstand, 
    // eller bruke en alert for å informere brukeren om feilen
    alert(error); // Enkel måte å vise feilmelding på
  }
};
