import React from "react";

export const Header = ({ isListView, onLayoutToggle }) => {
  console.log("Header: ", isListView);
  return (
    <nav>
      <div className="nav-wrapper">
      <a href="#" class="brand-logo center">React Users</a>
        <a className="waves-effect waves-light btn" onClick={onLayoutToggle}>
          {" "}
          {isListView ? "List View" : "Grid View"}{" "}
        </a>
        <a className="waves-effect waves-light btn">OnRefresh
          {" "}
          
        </a>
      
      </div>
      
    </nav>
  );
};
