import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext } from 'react'
import { app } from '../firebase';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseAuth = getAuth(app);
const firebaseDB = getDatabase(app);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const putData = (key, data) => set(ref(firebaseDB, key), data);

  return (
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
        {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider;