import { createContext } from "react";
import { app } from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    userLogin,
    userLogout,
    UserProfile,
    logInbyGoogle,
    logInbyGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
