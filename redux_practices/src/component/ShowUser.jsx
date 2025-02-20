import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../feature/UsersSlice';

const ShowUser = () => {
    const users = useSelector((state) => state.users); //  Selects users from Redux state
    // console.log(users);
    const dispatch = useDispatch();
    const handleBtn = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <div>
            <h1 className='text-center text-xl mt-2'>Users List</h1>
            <div className="w-1/3 m-auto bg-gray-700 py-3 px-4 rounded-md text-white">
                <ul>
                    {users.length > 0 ? (
                        users.map((user) => (
                           <div  key={user.id} className="flex items-center justify-between my-1 bg-gray-400 py-2 px-3 my-2 rounded-md">
                             <li className="text-xl capitalize">
                                {user.name}
                            </li>
                            <button onClick={() => handleBtn(user.id)} className='cursor-pointer'><MdDeleteForever size={30} color='red' /></button>
                           </div>
                        ))
                    ) : (
                        <li className="text-center text-gray-400">No users available</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ShowUser;


