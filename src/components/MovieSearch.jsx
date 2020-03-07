import React from "react";

import { MdSearch } from "react-icons/md";

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit() {
    this.props.searchMovies(this.state.searchTerm);
  }

  handleKeyDown(e) {
    if (e.key !== "Enter") return;
    this.handleSubmit();
  }

  render() {
    return (
      <div className="MovieSearch--wrapper">
        <input
          type="text"
          placeholder="Search by title"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="MovieSearch--input"
        />
        <div onClick={this.handleSubmit} className="MovieSearch--submit">
          <MdSearch size={30} />
        </div>
      </div>
    );
  }
}

export default MovieSearch;
