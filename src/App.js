import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const UsersDataBaseArr = [];
  const [usersInfo, setUserInfo] = useState(UsersDataBaseArr);

  const saveEnteredDataHandler = (userData) => {
    setUserInfo((prevDataBaseUpdate) => {
      return [userData, ...prevDataBaseUpdate];
    });
  };

  return (
    <div>
      <AddUser onSaveEnteredData={saveEnteredDataHandler} />
      <UsersList items={usersInfo}></UsersList>
    </div>
  );
}

export default App;
