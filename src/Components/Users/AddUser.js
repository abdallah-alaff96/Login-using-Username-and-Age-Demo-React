import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setUserName] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const AgeChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    console.log(enteredName);
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid inputs",
        message: "Please, Enter a valid name and age (non empty inputs).",
      });
      return;
    }
    // "+" is to convert to number, because useState('') will convert it to string
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please, Enter a valid age (> 0).",
      });
      return;
    }

    const userData = {
      userName: enteredName,
      age: enteredUserAge,
      id: Math.random().toString(),
    };
    props.onSaveEnteredData(userData);
    // setUserName("");
    // setAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
