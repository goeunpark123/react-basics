import React from "react";

import UserList from "../components/UserList";

const USERS = [
  {
    id: "u2",
    name: "Henry Hanover-Stuart-Fox",
    image: "https://i.ibb.co/LY0qbSp/henry.png",
    places: "3",
  },
];
//https://i.ibb.co/HT4MXF8/alex.png

const User = () => {
  return <UserList items={USERS} />;
};

export default User;
