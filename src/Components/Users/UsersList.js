import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UsersList = (props) => {
  console.log(props.items);
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((eachUser) => (
          <li key={eachUser.id}>
            {eachUser.userName} ({eachUser.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
