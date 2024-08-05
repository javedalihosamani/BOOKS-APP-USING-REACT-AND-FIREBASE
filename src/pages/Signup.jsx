import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password).then((value)=> alert("Success"));
    }

    const signupWithGoogle = () => {
      signInWithPopup(auth, googleProvider);
    }
  return (
    <Fragment>
        <div className="signup-page">
          <h1>Signup Page</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email here' onChange={e=>setEmail(e.target.value)} value={email}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password here' onChange={e=>setPassword(e.target.value)} value={password}/>

            <br />
            <button onClick={signupWithGoogle}>Sign In With Google</button>
            <button onClick={createUser}>Signup</button>
        </div>
    </Fragment>
  )
}

export default SignupPage;