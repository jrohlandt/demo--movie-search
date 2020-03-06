import React from "react";

import MovieList from "./components/MovieList";

import Ajax from "./helpers/Ajax";

import Movie from "./Movie";

class WatchLater extends Movie {
  constructor(props) {
    super(props);

    this.state = {
      watchLater: [],
      movies: [],
      heading: "Watch later"
    };

    this.deleteFromWatchLater = this.deleteFromWatchLater.bind(this);
  }

  componentDidMount() {
    const watchLater = this.getWatchLater();
    this.setState({ heading: "Loading...", watchLater });
    Ajax.get("/demos/movie-search/data/movies/popular.json")
      .then(res => {
        if (typeof res.results != "undefined") {
          this.setState({
            movies: res.results.filter(m => watchLater.indexOf(m.id) !== -1),
            heading: "Watch later"
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1 className="heading">{this.state.heading}</h1>
        {!this.state.movies.length && this.state.heading !== "Loading..." ? (
          <p className="empty-watchlist-notification">
            You have not added any movies yet.
          </p>
        ) : (
          ""
        )}
        <MovieList
          movies={this.state.movies}
          watchLater={this.state.watchLater}
          saveToWatchLater={this.saveToWatchLater}
          deleteFromWatchLater={this.deleteFromWatchLater}
        />
      </div>
    );
  }
}

export default WatchLater;
