import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import "antd/dist/reset.css";
import UserItem from "./components/UserItem";
const staticUser = [
  { id: "e1", name: "Tom", age: 20 },
  { id: "e2", name: "Max", age: 23 },
  { id: "e3", name: "Jane", age: 19 },
];
function App() {
  const [users, setUsers] = useState(staticUser);

  const addUserHandler = (newUser) => {
    setUsers((prevUser) => {
      return [...prevUser,newUser];
    });
  };
  const deleteUserHandler = (userId) => {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }
  const updateUsers = (newUsers) => {
    setUsers(newUsers)
  }

  return (
    <>
      <div className="pt-6 h-1/3 flex justify-center m-auto">
        <UserForm addUserHandler={addUserHandler} />
      </div>
      <UserItem
        updateUsers={updateUsers}
        items={users}
        onDelete={deleteUserHandler}
      />
    </>
  );
}
export default App;
