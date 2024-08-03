import { useState } from "react";
import "./App.css";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Firebase", firebase);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
