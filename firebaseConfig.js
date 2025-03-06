// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Configuración de Firebase (copiar desde Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCw2RNYn0RmKGVhxDUkUP7zIRvBbgIlijY",
  authDomain: "meetscalendar-65f12.firebaseapp.com",
  projectId: "meetscalendar-65f12",
  storageBucket: "meetscalendar-65f12.firebasestorage.app",
  messagingSenderId: "723756847221",
  appId: "1:723756847221:web:67f5227996bc73c1b4683c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Funciones de autenticación
const signInWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, signInWithGoogle, logout };