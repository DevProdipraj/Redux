import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlicce";  

const AddTodo = () => {
  const userText = useRef(null);
  const dispatch = useDispatch();

  const handleBtn = () => {
    if (userText.current.value.trim() === "") return;

    const newUser = {
      id: Date.now(),  
      name: userText.current.value,  
    };

    dispatch(addUser(newUser));  
    userText.current.value = "";  
  };

  return (
    <div className="flex items-center bg-gray-400 w-1/3 m-auto p-4 rounded-md mt-5">
      <input
        ref={userText}
        type="text"
        className="p-2 border rounded-md w-full border-white outline-white"
      />
      <button
        onClick={handleBtn}
        className="cursor-pointer ms-2 bg-blue-500 text-white px-4 py-2.5 rounded-md transition-all duration-500 hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
