import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserItem from "./components/UserItem";
const staticUser = [
  { id: "e1", name: "Tom", age: 20 },
  { id: "e2", name: "Max", age: 23 },
  { id: "e3", name: "Jane", age: 19 },
];
function App() {
  const [user, setUser] = useState(staticUser);

  const addUserHandler = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser,newUser];
    });
  };
  return (
    <>
      <div className="pt-6 h-1/3 flex justify-center m-auto">
        <UserForm addUserHandler={addUserHandler} />
      </div>
      <UserItem items={user} />
    </>
  );
}
export default App;
