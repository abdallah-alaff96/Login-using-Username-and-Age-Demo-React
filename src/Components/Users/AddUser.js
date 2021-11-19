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
    const userData = {
      userName: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onSaveEnteredData(userData);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={AgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
