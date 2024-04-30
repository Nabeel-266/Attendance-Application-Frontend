import React from "react";

// Import React Icons
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineAddCircle } from "react-icons/md";
import { TiThMenuOutline } from "react-icons/ti";

// Import Components
import Courses from "./courses";
import { useLocation } from "react-router-dom";

const Panel = () => {
  const location = useLocation();
  console.log(location);

  return <Courses />;
};

export default Panel;
