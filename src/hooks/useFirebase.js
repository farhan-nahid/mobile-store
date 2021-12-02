import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../Pages/Auth/Firebase/firebase.init';

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  initializeAuthentication();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const auth = getAuth();

  // google signIn/signUp function

  const googleSignIn = (history, location) => {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        toast.success('Logged in successfully...');
        setLoggedInUser(userCredential.user);
        const redirect_URI = location.state?.from || '/';
        history.replace(redirect_URI);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // gitHub signIn/signUp function

  const gitHubSignIn = (history, location) => {
    signInWithPopup(auth, gitHubProvider)
      .then((userCredential) => {
        toast.success('Logged in successfully...');
        setLoggedInUser(userCredential.user);
        const redirect_URI = location.state?.from || '/';
        history.replace(redirect_URI);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // email password signUp function

  const emailSignup = (name, email, password, history) => {
    const loading = toast.loading('Creating User... Please wait!!!');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          photoURL: 'https://i.ibb.co/G31TsrC/user.png',
          displayName: name,
        });
        toast.dismiss(loading);
        toast.success('Creating a new user successfully...');
        setLoggedInUser(userCredential.user);
        history.replace('/');
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // email password signIn function

  const emailSignIn = (email, password, history, location) => {
    const loading = toast.loading('Finding Account... Please wait!!!');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.dismiss(loading);
        toast.success('logged in successfully...');
        setLoggedInUser(userCredential.user);
        const redirect_URI = location.state?.from || '/';
        history.replace(redirect_URI);
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // signOut function

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUser(null);
        toast.error('Logged Out!!!');
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  };

  // observe user state change

  useEffect(() => {
    const unSubscrived = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser(null);
      }
      setIsLoading(false);
    });
    return () => unSubscrived;
  }, [auth]);

  return {
    isLoading,
    loggedInUser,
    googleSignIn,
    gitHubSignIn,
    emailSignup,
    emailSignIn,
    logOut,
  };
};

export default useFirebase;
