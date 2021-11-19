import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0)
      return console.log("There is no correct userName");
    // "+" is to convert to number, because useState('') will convert it to string
    if (+enteredAge < 1)
      return console.log("Please, Age must be greater than 0");

    const userData = {
      userName: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onSaveEnteredData(userData);
    setUserName("");
    setAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={AgeChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
