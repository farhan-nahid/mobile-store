import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
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
  const [isAdmin, setIsAdmin] = useState(false);

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
        saveUserForOthers(
          userCredential.user.email,
          userCredential.user.displayName
        );
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
        saveUserForOthers(
          userCredential.user.email,
          userCredential.user.displayName
        );
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
        saveUserForEmail(email, name);
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

  // save user to mongoDB

  const saveUserForEmail = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post('https://mobiles--store.herokuapp.com/users', user)
      .then((res) => {
        if (res.data.upsertedId) {
          toast.success('User Added in our Database Successfully!');
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // save user to mongoDB

  const saveUserForOthers = (email, displayName) => {
    const user = { email, displayName };
    axios
      .put('https://mobiles--store.herokuapp.com/users', user)
      .then((res) => {
        if (res.data.upsertedId) {
          toast.success('User Added in our Database Successfully!');
        }
      })
      .catch((err) => toast.error(err.message));
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
        getIdToken(user).then((idToken) => {
          localStorage.setItem('id_token', idToken);
        });
      } else {
        setLoggedInUser(null);
      }
      setIsLoading(false);
    });
    return () => unSubscrived;
  }, [auth]);

  // Check Admin or not

  useEffect(() => {
    axios
      .get(`https://mobiles--store.herokuapp.com/user/${loggedInUser?.email}`)
      .then((res) => setIsAdmin(res.data.admin))
      .catch((err) => toast.error(err.message));
  }, [loggedInUser?.email]);

  return {
    isLoading,
    loggedInUser,
    isAdmin,
    googleSignIn,
    gitHubSignIn,
    emailSignup,
    emailSignIn,
    logOut,
  };
};

export default useFirebase;
