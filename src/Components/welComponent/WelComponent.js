import React from "react";
import "./WelComponent.css";
import { Link } from "react-router-dom";

const welComponent = () => {
  return (
    <div className="main">
      <h1>Welcome to my Projects</h1>
      <div>
        <Link to="/todo">Todo App</Link>
      </div>
    </div>
  );
};
export default welComponent;
