import React from 'react';
import axios from 'axios';
import SearchInput from '../search-input/search-input';
import ImageList from '../image-list/image-list';

class App extends React.Component {
    
    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=25570810-c13e8215d8cec7b7582546b6a&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
    }

    render() {
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;