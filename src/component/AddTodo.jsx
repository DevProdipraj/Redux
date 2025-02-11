import React, { useRef } from "react";

const AddTodo = () => {
  const userText = useRef(null);

  const handleBtn = () => {
    console.log(userText.current.value);
  };

  return (
    <div className="bg-gray-400 w-1/3 m-auto p-4 rounded-md mt-5">
      <input
        ref={userText}
        type="text"
        name="todos"
        id=""
        className="p-2 border rounded-md w-full"
      />
      <button
        onClick={handleBtn}
        className="cursor-pointer mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
