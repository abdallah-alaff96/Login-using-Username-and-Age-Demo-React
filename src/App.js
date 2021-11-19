import React from "react";
import AddUser from "./Components/Users/AddUser";

function App() {
  const saveEnteredDataHandler = (userData) => {
    console.log(userData);
  };
  return (
    <div>
      <AddUser onSaveEnteredData={saveEnteredDataHandler} />
    </div>
  );
}

export default App;
