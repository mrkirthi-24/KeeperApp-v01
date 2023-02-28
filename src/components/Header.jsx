import React from "react";
import NotesIcon from "@material-ui/icons/Notes";

const Header = () => {
  return (
    <div>
      <header>
        <h1 className="header">
          <NotesIcon />
          &nbsp;Keeper
        </h1>
      </header>
    </div>
  );
};

export default Header;
