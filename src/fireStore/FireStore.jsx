import React from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import { app } from '../firebase';

const firestore = getFirestore(app);

const FireStore = () => {

    // Create a new collection
    const writeData = async () => {
        const result = await addDoc(collection(firestore, 'cities'),{
            name: "Bengaluru",
            pinCode : 560078,
            lat : 123,
            long : 456
        });
        console.log("Result = ", result);
    }

    // Create a subCollection 
    const makeSubCollection = async () => {
        await addDoc(collection(firestore, 'cities/uajzG3qsoOaUUxXja9bf/places'),{
            name : 'This is a place',
            desc : 'Awesome desc',
            date : Date.now()
        });
    }

    // Read a data from Firestore
    const getDocuments = async () => {
        const ref =  doc(firestore, 'cities', 'uajzG3qsoOaUUxXja9bf');
        const snap = await getDoc(ref);
        console.log("Snap", snap.data());        
    }

    // Get Document by Query
    const getDocumentsByQuery = async () => {
        const collectionRef = await collection(firestore, 'users');
        
        const q = query(collectionRef, where('isMale', "==", true));

        const snapshot = await getDocs(q);
        snapshot.forEach((data)=>console.log("getDocumentsByQuery", data.data()))
    }

    // Update Collection
    const update = async () => {
        const docRef = doc(firestore, 'cities', 'uajzG3qsoOaUUxXja9bf');
        await updateDoc(docRef, {
            name : "Mysore",
        })
    }
  return (
    <div>
        <center>
            <h1>FireStore</h1>
        </center>
        <hr />

        <button onClick={writeData}>Put Data</button>
        <button onClick={makeSubCollection}>Put Sub Data</button>
        <button onClick={getDocuments}>Get Document</button>
        <button onClick={getDocumentsByQuery}>Get Documents By Query</button>
        <button onClick={update}>Update Collection</button>
    </div>
  )
}

export default FireStore