import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useState } from "react";

const RealTimeDB = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Firebase", firebase);

    // Insert a New Data into the DATABASE
    const putDataNew = () => {
        firebase.putData("grandfather/father/child", {id:1, name:"ganesh", age:21});
    }

    return (
        <div>
            <h1>Firebase React App</h1>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button
                onClick={() => {
                    firebase.signupUserWithEmailAndPassword(email, password);
                    firebase.putData("users/manu", { email, password });
                }}
                >
                    SignUp
            </button>
            <button onClick={putDataNew}>Trigger</button>
        </div>
    )
}

export default RealTimeDB