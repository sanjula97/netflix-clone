import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="http://pngimg.com/uploads/netflix/netflix_PNG32.png"
        alt="Netflix logo"
        className="nav__logo"
      />

      <img
        src="http://pngimg.com/uploads/ironman/ironman_PNG45.png"
        alt="Nav avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
