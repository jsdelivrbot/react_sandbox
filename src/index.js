import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyA_qUy1dbBR-YJ0ig0kHzwwrgc9qd2dl5I";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

         YTSearch({key: API_KEY, term: "Spam Sandwiches"}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <h3>Discipline</h3>
                <div>
                    <SearchBar />
                    <VideoDetail video={ this.state.videos[0] } />
                    <VideoList video={ this.state.videos } />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));