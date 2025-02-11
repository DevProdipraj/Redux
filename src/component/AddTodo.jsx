import React from 'react'

const AddTodo = () => {
  return (
    <div className='bg-gray-400 w-1/3 m-auto p-4 rounded-md mt-5 '>
      <input type="text" name="todos" id="" />
      <button className='cursor-pointer' type="button">Add</button>
    </div>
  )
}

export default AddTodo
