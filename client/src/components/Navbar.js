import React from "react";
import { useState, useEffect } from "react";

const Navbar = (data) => {
  return (
    <nav className="navbar">
      <div className="nav-group">
        <div className="navlogo"> C I N E M A</div>
        <input
          type="text"
          className="nav-search"
          placeholder="Search movies..."
        />
        <div className="navlinks">
          <span>Home</span>
          <span>My List</span>
          <span>TV Series</span>
          <span>Movies</span>
        </div>
          <img
            src="/user-profile-logo.png"
            alt="user-profile"
            className="user-avatar"
          />
      </div>
    </nav>
  );
};

export default Navbar;
