import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";

function App() {
  const UsersDataBaseArr = [];
  const [usersInfo, setUserInfo] = useState(UsersDataBaseArr);

  const saveEnteredDataHandler = (userData) => {
    setUserInfo((prevDataBaseUpdate) => {
      return [userData, ...prevDataBaseUpdate];
    });
  };
  console.log(usersInfo);
  return (
    <div>
      <AddUser onSaveEnteredData={saveEnteredDataHandler} />
    </div>
  );
}

export default App;
