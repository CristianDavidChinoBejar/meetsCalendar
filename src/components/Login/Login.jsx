import { signInWithGoogle, auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { OnlyLogin } from "./OnlyLogin";
const Login = () => {
  const [user, setUser] = useState(null);
  // Detectar cambios de autenticación
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await sendUserDataToBackend(currentUser); // Enviar datos al backend
      }
    });
  }, []);

  // Función para enviar los datos al backend
  const sendUserDataToBackend = async (user) => {
    const userData = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      profilePic: user.photoURL,
    };
    console.log(user, ' GAA 1');
    
    try {
      const response = await fetch('https://user-ms-gmkm.onrender.com/api/user/fetchGoogleData', {
        // http://localhost:5000/api/auth
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
      const text = await response.text();
      console.log(text,' pato');
      
      // const data = await response.json();
      console.log("Respuesta al backend:", response);
    } catch (error) {
      console.error("Error al enviar los datos al backend:", error);
    }

   
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Bienvenido, {user.displayName}</h2>
          <img src={user.photoURL} alt="Avatar" width="50" />
          <h4>{user.email}</h4>
          <button onClick={() => auth.signOut()}>Cerrar sesión</button>
        </div>
      ) : (
        <OnlyLogin />
      )}
    </div>
  );
};

export default Login;
