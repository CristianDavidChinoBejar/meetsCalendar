import { useState } from "react";
import { signInWithGoogle, logout, auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  // Escuchar cambios de autenticación
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      {user ? (
        <div>
            {console.log(user)}
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
