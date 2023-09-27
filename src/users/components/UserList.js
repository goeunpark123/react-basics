import React from "react";
import "./UserList.css";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <h2>No user found.</h2>
      </Card>
    );
  }

  return (
    <ul className="user-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          places={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UserList;
