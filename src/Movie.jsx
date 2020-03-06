import React from "react";

import MovieSearch from "./components/MovieSearch";
import MovieList from "./components/MovieList";

import Ajax from "./helpers/Ajax";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      heading: "Popular movies",
      watchLater: []
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.saveToWatchLater = this.saveToWatchLater.bind(this);
    this.deleteFromWatchLater = this.deleteFromWatchLater.bind(this);
  }

  searchMovies(searchTerm) {
    this.setState({ movies: [], heading: "Searching..." });
    Ajax.post("/movies/search", { searchTerm })
      .then(res => {
        if (typeof res.movies != "undefined") {
          this.setState({
            movies: res.movies,
            heading: `Search results (${res.movies.length})`
          });
        }
      })
      .catch(err => {
        this.setState({ heading: "An error ocurred." });
        console.log(err);
      });
  }

  saveToWatchLater(movieId) {
    let watchLater = [...this.state.watchLater];
    watchLater.push(movieId);

    this.setState({ watchLater });
    // Ajax.post(`/watchlist`, { movie_id: movieId }).catch(err =>
    //   console.log(err)
    // );

    this.setWatchLater(watchLater);
  }

  deleteFromWatchLater(movieId) {
    let watchLater = this.state.watchLater.filter(id => id !== movieId);
    this.setState({ watchLater });
    this.setWatchLater(watchLater);
    // Ajax.delete(`/watchlist/${movieId}`).catch(err => console.log(err));
  }

  setWatchLater(watchLater) {
    window.localStorage.setItem("watchLater", JSON.stringify(watchLater));
  }

  getWatchLater() {
    let watchLater = window.localStorage.getItem("watchLater");
    return watchLater === null ? [] : JSON.parse(watchLater);
  }

  componentDidMount() {
    this.setState({ heading: "Loading...", watchLater: this.getWatchLater() });
    Ajax.get("/demos/movie-search/data/movies/popular.json")
      .then(res => {
        if (typeof res.results != "undefined") {
          this.setState({
            movies: res.results,
            heading: "Popular movies"
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <MovieSearch searchMovies={this.searchMovies} />
        <h1 className="heading">{this.state.heading}</h1>
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

export default Movie;
