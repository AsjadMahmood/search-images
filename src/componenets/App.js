import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

class App extends React.Component {
    state={
        img:[]
    }

     onSearchSubmit = async(term)=>{
        console.log('run',term);
        
        let response = await unsplash.get('/search/photos',{
            params:{query:term}
        })

        console.log('res',response.data.results[0].urls.regular);
        if(response)
            this.setState({img:response.data.results})
        
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit = {this.onSearchSubmit}></SearchBar>
                <ImageList imageList={this.state.img}></ImageList>
            </div>
        );
    }
}


export default App;