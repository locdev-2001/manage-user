import React from "react";

const UserItem = (props) => {
  return (
    <div className=" h-1/3 pt-6 flex justify-center">
      <ol className="space-y-4 w-3/6 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
        {/* UserItems */}
        {props.items.map((item) => (
          <li>
            <div
              className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
              role="alert"
            >
              <div className="flex items-center justify-between">
                <span className="sr-only">Social accounts</span>
                <h3 className="font-medium">{item.name}</h3>
                <h3 className="font-medium">{item.age}</h3>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default UserItem;
