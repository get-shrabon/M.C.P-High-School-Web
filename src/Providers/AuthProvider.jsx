import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const twitterLogin = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
    setUser,
    createUser,
    userLogin,
    logOut,
    googleLogIn,
    facebookLogin,
    twitterLogin,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
