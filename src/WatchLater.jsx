import React from 'react';

import MovieList from './components/MovieList';

import Ajax from './helpers/Ajax';

import Movie from './Movie';

class WatchLater extends Movie {

    constructor(props) {
        super(props);

        this.state = {
            watchLater: [],
            movies: [],
            heading: 'Watch later',
        };

        this.deleteFromWatchLater = this.deleteFromWatchLater.bind(this);
    }

    componentDidMount() {

        this.setState({heading: 'Loading...'});
        Ajax.get('/watchlist')
            .then(res => {
                if (typeof res.movies != 'undefined' && typeof res.watchLater != 'undefined') {
                    this.setState({
                        movies: res.movies, 
                        watchLater: res.watchLater,
                        heading: 'Watch later'
                    });
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div> 
                <h1 className='heading' >{this.state.heading}</h1>                   
                {
                    !this.state.movies.length && this.state.heading !== 'Loading...' ? <p className="empty-watchlist-notification">You have not added any movies yet.</p> : ''
                }
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