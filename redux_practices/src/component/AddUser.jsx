import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../feature/UsersSlice'

const AddUser = () => {

    const userText = useRef(null)
    const dispatch = useDispatch();
    const handleBtn = () => {
        const newUser = {
            id: Date.now(),
            name : userText.current.value,
        };
        dispatch(addUsers(newUser))
        userText.current.value = "";
    }


  return (
    <div>
        <h1 className='w-1/3 m-auto text-center py-4 text-2xl underline underline-offset-4'>Add Users</h1>
    <div className="flex items-center justify-between w-1/3 m-auto bg-gray-700 py-3 px-4 rounded-md ">
        <input ref={userText} className='px-3 py-2 w-3/3 outline-0 border-1 border-white rounded-md text-white' type="text" name="UserName" id="" />
        <input onClick={handleBtn} className='bg-green-500 py-2.5 rounded-md ms-2 px-4 transition-all duration-500 hover:bg-green-600 cursor-pointer' type="button" value="Add" />
    </div>
    </div>
  )
}

export default AddUser
