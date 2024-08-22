import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../firebase';
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database';

const firebaseAuth = getAuth(app);
const firebaseDB = getDatabase(app);

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {

    const [name, setName] = useState("");

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const putData = (key, data) => set(ref(firebaseDB, key), data);

    // Get the data from Database
    /* get(child(ref(firebaseDB), 'grandfather')).then((snapshot) => {
      console.log('Get Child', snapshot.val());
    });
    get(child(ref(firebaseDB), 'grandfather/father')).then((snapshot) => {
      console.log('Get Child', snapshot.val());
    }); */
    get(child(ref(firebaseDB), 'grandfather/father/child')).then((snapshot) => {
      console.log('Get Child', snapshot.val());
    });

    onValue(ref(firebaseDB, 'grandfather/father/child'), (snapshot) => 
      console.log('Onvalue', snapshot.val())
    );

    useEffect(()=>{
      onValue(ref(firebaseDB, 'grandfather/father/child'), (snapshot) => 
        setName(snapshot.val().name)
      );
    },[]);
  return (
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, putData}}>
        <h3>Name is : {name}</h3>
        {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider;