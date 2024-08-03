import React, { Fragment, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((value)=> alert("SignIn Success"))
        .catch(error => console.log(error));
  
    }
  return (
    <Fragment>
        <div className="signin-page">
          <h1>Signin Page</h1>
            <label htmlFor="email">Enter your Email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email here' onChange={e=>setEmail(e.target.value)} value={email}/>

            <label htmlFor="password">Enter your Password</label>
            <input type="password" name="password" id="password" placeholder='Enter your password here' onChange={e=>setPassword(e.target.value)} value={password}/>

            <button onClick={singinUser}>Sign me in</button>
        </div>
    </Fragment>
  )
}

export default SigninPage;