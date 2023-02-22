import { Button, Form } from "antd";
import React, { useState } from "react";
import CollectionCreateForm from "./ModalEdit";

const UserItem = (props) => {
  const [userUpdate, setUserUpdate] = useState(null);

  const deleteHandler = (userId) => {
    props.onDelete(userId);
  };
  const [open, setOpen] = useState(false);

  
  const updateUser = user => {
    const newUsers = props.items.map(item => {
      if (item.id === user.id) {
        item.name = user.name;
        item.age = user.age;
      }
      return item;
    })
    props.updateUsers(newUsers)
    setOpen(false);
  }

  return (
    <div className=" h-1/3 pt-6 flex justify-center">
      <ol className="space-y-4 w-3/6 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
        {/* UserItems */}
        {props.items.map((item) => (
          <li key={item.id}>
            <div
              className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
              role="alert"
            >
              <div className="flex items-center justify-between">
                <span className="sr-only">Social accounts</span>
                <h3 className="font-medium">{item.name}</h3>
                <h3 className="font-medium">{item.age}</h3>
                <div className="flex gap-5">
                  <Button
                    type="primary"
                    onClick={() => {
                      setUserUpdate(item)
                      setOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      deleteHandler(item.id);
                    }}
                    type="primary"
                    danger
                    ghost
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
        <CollectionCreateForm
          updateUser={updateUser}
          user={userUpdate}
          open={open}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </ol>
    </div>
  );
};
export default UserItem;
