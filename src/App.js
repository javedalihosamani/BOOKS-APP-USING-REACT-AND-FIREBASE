// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";

// const db = getDatabase(app);

const auth = getAuth(app);

function App() {
  // TO STORE A DATA INTO THE DATABASE
  /* const putData = () => {
    set(ref(db, "users/javed"), {
      id: 1,
      name: "Javed Hosamani",
      age: 21,
    });
  }; */

  // TO CREATE A NEW USER
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "javed@gmail.com", "javed@123").then(
      (value) => console.log(value)
    );
  };

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
