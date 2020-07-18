import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }
    
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('state', this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label> Image Search</label>
                        <input value={this.state.term} type='text' onChange={(e) => { this.setState({ term: e.target.value }) }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar