import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  // google and github provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // user and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google auth provider
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github Auth provider
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Register with Email & Password
  const userRegisterWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
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

  // useEffect including axiosPublic
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  // Auth Info
  const authInfo = {
    user,
    setUser,
    loading,
    googleLogin,
    githubLogin,
    userRegisterWithEmail,
    userLoginWithEmail,
    userLogout,
    userProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
