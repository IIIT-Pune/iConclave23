import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const GoogleAuth = () => {
  const [user] = useAuthState(auth);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex">
          <p>You are signed in as: {user.displayName}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;
