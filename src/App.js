import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";

// import { FaClock, FaChartBar, FaRegFolder, FaUser, FaTags, FaSignOutAlt, FaPowerOff } from 'react-icons/fa';
import "./sass/app.scss";

// import TopNav from "./components/TopNav";
import MainNav from "./components/MainNav";
import Movies from "./Movies";
import WatchLater from "./WatchLater";

const logout = () => (window.location = "/logout");

if (window.localStorage.getItem("watchLater") === null) {
  window.localStorage.setItem("watchLater", "[]");
}

const App = () => (
  <Router>
    <div className="wrapper">
      <MainNav />
      <div className="box content">
        <Route exact path="/demos/movie-search/" component={Movies} />
        <Route exact path="/demos/movie-search/popular" component={Movies} />
        <Route exact path="/demos/movie-search/settings" component={Movies} />
        <Route path="/demos/movie-search/watch-later" component={WatchLater} />
      </div>
      <div className="box footer"></div>
    </div>
  </Router>
);

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
