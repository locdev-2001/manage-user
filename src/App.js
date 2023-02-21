import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
const staticUser = [
  { id: "e1", name: "Tom", age: 20 },
  { id: "e2", name: "Max", age: 23 },
  { id: "e3", name: "Jane", age: 19 },
];
function App() {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  return (
    <>
      <div className="pt-6 h-1/3 flex justify-center m-auto">
        <UserForm />
      </div>
      <div className="w-3/6 h-1/3 pt-6 flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </>
  );
}
export default App;
