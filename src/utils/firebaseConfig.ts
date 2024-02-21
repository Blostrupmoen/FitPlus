    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from 'firebase/auth'; // Legg til Persistence-importen


    // Din Firebase-prosjektkonfigurasjon
    const firebaseConfig = {
    apiKey: "AIzaSyCPI_ChFsCuIFZB8e7yLI0XH75xh1eUtjs",
    authDomain: "fitplus-1cc6e.firebaseapp.com",
    projectId: "fitplus-1cc6e",
    storageBucket: "fitplus-1cc6e.appspot.com",
    messagingSenderId: "698678208497",
    appId: "1:698678208497:web:c58b87ec3549a9b4a58650",
    measurementId: "G-2REPPTBYVV"
    };

    const app = initializeApp(firebaseConfig);

    // Hent Firestore-instansen
    const firestore = getFirestore(app);

    // Initialiser Firebase Auth
    const auth = getAuth(app); // Bruk getAuth direkte uten custom persistenskonfigurasjon

    // Eksporter de initialiserte tjenestene
    export { app, firestore, auth };