import React from 'react';

import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

import Ajax from './helpers/Ajax';

class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            heading: 'Popular movies',
            watchLater: [],
        }

        this.searchMovies = this.searchMovies.bind(this);
        this.saveToWatchLater = this.saveToWatchLater.bind(this);
        this.deleteFromWatchLater = this.deleteFromWatchLater.bind(this);
    }

    searchMovies(searchTerm) {

        this.setState({movies: [], heading: 'Searching...'});
        Ajax.post('/movies/search', {searchTerm})
            .then(res => {
                if (typeof res.movies != 'undefined') {
                    this.setState({movies: res.movies, heading: `Search results (${res.movies.length})`});
                }
            })
            .catch(err => {
                this.setState({heading: 'An error ocurred.'});
                console.log(err);
            });
    }

    saveToWatchLater(movieId) {
        let watchLater = [...this.state.watchLater];
        watchLater.push(movieId);

        this.setState({watchLater});
        Ajax.post(`/watchlist`, {movie_id: movieId})
            .catch(err => console.log(err));
    }

    deleteFromWatchLater(movieId) {
        let watchLater = this.state.watchLater.filter(id => id !== movieId);

        this.setState({watchLater});
        Ajax.delete(`/watchlist/${movieId}`)
        .catch(err => console.log(err));
    }

    componentDidMount() {

        this.setState({heading: 'Loading...'});
        Ajax.get('/movies/popular')
            .then(res => {
                if (typeof res.movies != 'undefined' && typeof res.watchLater != 'undefined') {
                    this.setState({
                        movies: res.movies, 
                        watchLater: res.watchLater,
                        heading: 'Popular movies'
                    });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div style={{width: '100%'}}> 
                <MovieSearch searchMovies={this.searchMovies} />
                <h1 className='heading' >{this.state.heading}</h1>                   
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