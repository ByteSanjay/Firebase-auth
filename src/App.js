import "./App.css";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className="App">
      {user ? (
        <button className="login-button" onClick={() => auth.signOut()}>
          Log out
        </button>
      ) : (
        <button className="login-button" onClick={googleSignIn}>
          Log in
        </button>
      )}
    </div>
  );
}

export default App;
