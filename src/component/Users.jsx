import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, removeAllUsers } from "../features/userSlicce";  

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

 
  const handleRemoveAll = () => {
    dispatch(removeAllUsers());  
  };

  
  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h2 className="text-lg font-bold text-white w-1/3 m-auto mt-6 border-b-2">
        User List
      </h2>
      <ul className="mt-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="px-4 py-2 capitalize bg-gray-200 my-2 rounded w-1/3 m-auto flex items-center justify-between"
          >
            {user.name}
            <button
              onClick={() => handleRemoveUser(user.id)}  
              className="cursor-pointer bg-red-500 px-3 py-1.5 rounded-md text-white transition-all duration-500 hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

        <div className="w-1/3 m-auto text-right">
      {users.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-500 hover:bg-red-800 text-right cursor-pointer"
        >
          Remove All Users
        </button>
      )}
      </div>
    </div>
  );
};

export default Users;
