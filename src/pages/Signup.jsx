import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import { app } from '../firebase';

const auth = getAuth(app);
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password).then((value)=> alert("Success"));
    }

  return (
    <Fragment>
        <div className="signup-page">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email here' onChange={e=>setEmail(e.target.value)} value={email}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password here' onChange={e=>setPassword(e.target.value)} value={password}/>

            <button onClick={createUser}>Signup</button>
        </div>
    </Fragment>
  )
}

export default Signup;