import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  // social auth provider
  const googleProvider = new GoogleAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const githubProvider = new GithubAuthProvider()

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn User
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // social signIn
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  }

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  // signOut user
  const logOut = () => {
    setUser(null)
    return signOut(auth);
  };

  // observe auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    googleLogin,
    twitterLogin,
    githubLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
