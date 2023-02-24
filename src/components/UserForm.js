import { Modal } from "antd";
import React, { useEffect, useState, Fragment, useRef } from "react";

const UserForm = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const onChangeNotification = () => {
  //   if (user && age && age >=1) {
  //     setNotification('');
  //   } else if (age < 1) {
  //     setNotification(`Age can't be small than 1`)
  //   } else {
  //     setNotification(``)
  //   }
  // };
  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    // check if user null return popup
    event.preventDefault();
    // const enteredName = nameInputRef.current.value;
    // const enteredAge = ageInputRef.current.value;
    if (user && age && age >=1) {
      const newUser = {
        id: Math.random().toString(36).substring(2, 7),
        name: user,
        age: age,
      };
      props.addUserHandler(newUser);
      setUser("");
      setAge("");
      setIsFormOpen(false);
      //bugggggggggggggggggggggggggggggggggg
    }
    else {
      showModal();
      setNotification(`Please fill all fields or check age can't small than 1`);
      return;
    }
    //buggggggggggggggggggggggggg
  };
  const showForm = () => {
    setIsFormOpen(true);
  };
  const cancelForm = () => {
    setIsFormOpen(false);
  };
  useEffect(() => {
    console.log("FormOpen: ", isFormOpen);
  }, [isFormOpen]);
  //   useEffect(() => {
  //     console.log('USER:', user)
  //     console.log('AGE:',age)
  // },[user, age])
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isFormOpen ? (
        <form
          className="w-3/6 flex-col h-1/4 p-8 rounded-xl border-solid border-2 border-gray-500"
          onSubmit={submitHandler}
        >
          <label
            for="UserEmail"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-3"
          >
            <span className="text-xs font-medium text-white-700"> USER </span>
            <input
              type="text"
              id="user"
              value={user}
              placeholder="New User"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={userHandler}
              ref={nameInputRef}
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
              value={age}
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={ageHandler}
              ref={ageInputRef}
            />
          </label>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-gray focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white  dark:bg-tranparent rounded-md group-hover:bg-opacity-0">
              Add new user
            </span>
          </button>
          <button
            onClick={cancelForm}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3"
          >
            Close
          </button>
        </form>
      ) : (
        <div className="w-3/6 flex h-1/4 p-8 rounded-xl border-solid border-2 border-gray-500 justify-center ">
          <button
            onClick={showForm}
            class="relative inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              +
            </span>
          </button>
        </div>
      )}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{notification}</p>
      </Modal>
    </>
  );
};
export default UserForm;
