import React from 'react';

class MovieSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({searchTerm: e.target.value});
    }

    handleSubmit() {
        this.props.searchMovies(this.state.searchTerm);
    }

    handleKeyDown(e) {
        if (e.key !== 'Enter') return;
        this.handleSubmit();
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search title" 
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyDown} 
                />
                <button onClick={this.handleSubmit}>search</button>
            </div>
        );
    }
} 

export default MovieSearch;