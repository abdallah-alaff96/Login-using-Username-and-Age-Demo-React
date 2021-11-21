import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid inputs",
        message: "Please, Enter a valid name and age (non empty inputs).",
      });
      return;
    }
    // "+" is to convert to number, because useState('') will convert it to string
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please, Enter a valid age (> 0).",
      });
      return;
    }

    const userData = {
      userName: enteredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onSaveEnteredData(userData);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
