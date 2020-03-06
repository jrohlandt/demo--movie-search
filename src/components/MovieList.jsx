import React from 'react';
import { Link } from 'react-router-dom';

import { MdPlaylistAdd, MdPlaylistAddCheck, MdBookmark, MdDone, MdAdd } from 'react-icons/md';


class MovieList extends React.Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
            <div className='movie-list-wrapper'>
                <ul className='movie-list'>
                    { 
                        this.props.movies.map(m => {
                            // console.log(m.id);
                            return (
                                <li key={m.id}>
                                    <div className="poster-wrapper">
                                        <img src={`https://image.tmdb.org/t/p/w200/${m.poster_path}`} />
                                    </div>
                                    <div>
                                        <h3>{m.title} <small>({new Date(m.release_date).getFullYear()})</small></h3>
                                        <p>
                                            {m.overview}
                                        </p>
                                        <div className="movie-list-item-more">
                                            <Link to="/">more</Link>
                                            <span className="more-gradient"></span>
                                        </div>
                                    </div>
                                    <div>
                                        { 
                                            this.props.watchLater.indexOf(m.id) === -1 
                                                ? 
                                                    <div 
                                                        className='watch-later-btn'
                                                        onClick={() => this.props.saveToWatchLater(m.id)}>
                                                        <MdAdd size={25} />
                                                    </div>
                                                : 
                                                    <div
                                                        className='watch-later-btn saved'
                                                        onClick={() => this.props.deleteFromWatchLater(m.id)}>
                                                        <MdDone size={25} />
                                                    </div>
                                        }     
                                    </div>
                                </li>
                            )
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default MovieList;