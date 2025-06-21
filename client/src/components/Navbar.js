import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = (data) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-group">
        <div className="navlogo" onClick={() => navigate("/home")}>
          C I N E M A
        </div>
        <input
          type="text"
          className="nav-search"
          placeholder="Search movies..."
        />
        <div className="navlinks">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-list"
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            MyList
          </NavLink>
          <NavLink
            to="/tv-shows"
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Tv Shows
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "nav-link active-nav" : "nav-link"
            }
          >
            Movies
          </NavLink>
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
