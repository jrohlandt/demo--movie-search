import React from "react";

import { Link, NavLink } from "react-router-dom";
import {
  MdHome,
  MdArrowForward,
  MdWatchLater,
  MdStar,
  MdSettings
} from "react-icons/md";

const iconSize = 30;
const path = "/demos/movie-search";

const MainNav = props => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-logo">
        <Link exact="true" to={path} className="nav-link">
          <span className="nav-link-text">Movie Search</span>
          <MdArrowForward size={iconSize} />
        </Link>
      </li>

      <li className="nav-item">
        <NavLink
          to={path}
          exact="true"
          className="nav-link"
          activeClassName="nav-link-active"
        >
          <MdHome size={iconSize} />
          <span className="nav-link-text">Home</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to={`${path}/popular`}
          className="nav-link"
          activeClassName="nav-link-active"
        >
          <MdStar size={iconSize} />
          <span className="nav-link-text">Popular</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to={`${path}/watch-later`}
          className="nav-link"
          activeClassName="nav-link-active"
        >
          <MdWatchLater size={iconSize} />
          <span className="nav-link-text">Watch Later</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to={`${path}/settings`}
          className="nav-link"
          activeClassName="nav-link-active"
        >
          <MdSettings size={iconSize} />
          <span className="nav-link-text">Settings</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNav;
