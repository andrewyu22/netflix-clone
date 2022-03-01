import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
        alt="netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
