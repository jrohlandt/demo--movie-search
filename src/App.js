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

import TopNav from "./components/TopNav";
import Movies from "./Movies";
import WatchLater from "./WatchLater";
// import withMovies from "./components/withMovies";

// const WatchLaterWithMovies = withMovies(WatchLater);

const logout = () => (window.location = "/logout");

if (window.localStorage.getItem("watchLater") === null) {
  window.localStorage.setItem("watchLater", "[]");
}

const App = () => (
  <Router>
    <div className="wrapper">
      <TopNav />
      <div className="box content">
        <Route exact path="/" component={Movies} />
        <Route path="/watch-later" component={WatchLater} />
      </div>
      <div className="box footer"></div>
    </div>
  </Router>
);

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
