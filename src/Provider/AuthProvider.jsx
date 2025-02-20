import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // google and github provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // user and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with Email & Password
  const userRegisterWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google auth provider
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github provider
  const logInbyGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // login With Email
  const userLoginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout auth
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update Profile
  const userProfileUpdate = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  // Auth Info
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
