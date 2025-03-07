import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GeneralContainer from "./components/GeneralContainer/GeneralContainer.jsx";
import Login from "./components/Login/Login.jsx";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import ToDoList from "./components/ToDoList/ToDoLists.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  if (isLoggedIn === null) {
    return <p>Cargando...</p>;
  }

  return isLoggedIn ? <ToDoList /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

createRoot(document.getElementById("root")).render(<App />);
