import React from "react";

import { NavLink, Link } from "react-router-dom";

const TopNav = props => (
  <div className="box header">
    <div className="header-logo">
      <Link exact="true" to="/demos/movie-search/">
        Movie Search
      </Link>
    </div>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/demos/movie-search/watch-later"
              activeClassName="top-nav-active"
            >
              <span>Watchlist</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default TopNav;
