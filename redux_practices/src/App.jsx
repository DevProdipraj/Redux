import React from "react";
import AddUser from "./component/AddUser";
import ShowUser from "./component/ShowUser";

const App = () => {
  return (
    <div className="bg-gray-400 h-screen ">
      <div className="container">
        <AddUser />
        <ShowUser />
      </div>
    </div>
  );
};

export default App;
