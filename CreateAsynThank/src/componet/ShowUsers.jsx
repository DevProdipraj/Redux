import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../freature/userSlice"; // Ensure correct import path

const ShowUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users); // Access `users` array
  const status = useSelector((state) => state.users.status);
  console.log(users);

  // automatically api call when component render
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-xl underline">Users</h1>

      {/* api call using btn call  */}
      {/* <button
        onClick={() => dispatch(fetchUsers())}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Fetch Users
      </button> */}

      {/* Show loading message */}
      {status === "loading" && <p>Loading...</p>}

      {/* Show error message */}
      {status === "failed" && (
        <p className="text-red-500">Failed to fetch users.</p>
      )}

      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name}
              <span className="bg-green-500 text-white ms-2">
                {" "}
                {user.email}
              </span>
            </li>
          )) // Use `user.id` as key
        ) : (
          <li>No users available</li>
        )}
      </ul>
    </div>
  );
};

export default ShowUsers;
