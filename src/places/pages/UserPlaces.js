import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Kensington_Palace%2C_the_South_Front_-_geograph.org.uk_-_287402.jpg",
    title: "Kensington Palace",
    description:
      "The palace and gardens feature exhibitions related to people who lived here.",
    address: "Kensington Gardens, London W8 4PX",
    creator: "u2",
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/White_House%2C_Blue_Sky.jpg",
    title: "The White House",
    description: "Home & office of the United States president.",
    address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
    creator: "u2",
  },
  {
    id: "p2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
    title: "Empire State Building",
    description:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    address: "20 W 34th St., New York, NY 10001",
    creator: "u1",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
