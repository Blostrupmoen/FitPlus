import AsyncStorage from '@react-native-async-storage/async-storage';
import { firestore, auth } from './firebaseConfig'; // Juster importstien etter behov
import { collection, addDoc } from "firebase/firestore";


interface Activity {
  // Definer strukturen på dine aktivitetsobjekter
}

export const saveActivity = async (activity: Activity) => {
  const user = auth.currentUser;

  if (user) {
    // Autentisert bruker: Lagre aktiviteten i Firestore
    try {
      const docRef = await addDoc(collection(firestore, `users/${user.uid}/activities`), activity);
      console.log("Dokument skrevet med ID: ", docRef.id);
    } catch (error) {
      console.error("Feil ved lagring av aktivitet i Firestore:", error);
    }
  } else {
    // Gjestebruker: Lagre aktiviteten lokalt med AsyncStorage
    try {
      const existingActivitiesString = await AsyncStorage.getItem('activities');
      const existingActivities = existingActivitiesString ? JSON.parse(existingActivitiesString) : [];
      existingActivities.push(activity);
      await AsyncStorage.setItem('activities', JSON.stringify(existingActivities));
      console.log('Aktivitet lagret lokalt');
    } catch (error) {
      console.error('Feil ved lokal lagring av aktivitet:', error);
    }
  }
};
