import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GeneralContainer from "./components/GeneralContainer/GeneralContainer.jsx";
import Login from "./components/Login/Login.jsx";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Inicialmente `null` para indicar que aún no sabemos el estado de autenticación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // `true` si hay usuario, `false` si no
    });

    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) {
    return <p>Cargando...</p>; // Solo mostramos esto mientras Firebase verifica el usuario
  }

  return isLoggedIn ? <GeneralContainer /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

createRoot(document.getElementById("root")).render(<App />);
