import { useState, useEffect } from "react";
import { signInWithGoogle, logout, auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Nuevo estado de carga

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // La carga termina cuando Firebase responde

      if (currentUser) {
        console.log("Usuario autenticado:", currentUser);
        onLogin(); // Solo llamar onLogin si el usuario está autenticado
      }
    });

    return () => unsubscribe();
  }, [onLogin]);

  if (loading) {
    return <p>Cargando...</p>; // Muestra un mensaje mientras Firebase verifica el usuario
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenidx, {user.displayName}</h2>
          <img src={user.photoURL} alt="Avatar" width="50" />
          <h4>{user.email}</h4>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
      )}
    </div>
  );
};

export default Login;
