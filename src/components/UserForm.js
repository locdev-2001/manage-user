import React, { useState } from "react";

const UserForm = () => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const userHandler = (event) => {
      setUser(event.target.value);
      console.log(user)
  };
    const ageHandler = (event) => {
        setAge(event.target.value);
        console.log(age)
    };
    
  return (
    <form className="w-3/6 flex-col h-1/4 p-8 rounded-xl border-solid border-2 border-gray-500">
      <label
        for="UserEmail"
        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3"
      >
        <span className="text-xs font-medium text-white-700"> USER </span>
        <input
          type="text"
          id="user"
          placeholder="New User"
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          onChange={userHandler}
        />
      </label>

      <label
        for="Age"
        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3"
      >
        <span className="text-xs font-medium text-gray-700"> Age </span>
        <input
          type="text"
          id="Age "
          placeholder="Age"
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          onChange={ageHandler}
        />
      </label>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-gray focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  dark:bg-tranparent rounded-md group-hover:bg-opacity-0">
          Purple to pink
        </span>
      </button>
    </form>
  );
};
export default UserForm;
