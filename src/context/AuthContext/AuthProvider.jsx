import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserName = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    updateUserName,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
