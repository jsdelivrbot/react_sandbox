import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyA_qUy1dbBR-YJ0ig0kHzwwrgc9qd2dl5I";

const App = () => {
    return (
        <div>
            <h3>Discipline</h3>
            <div>
                <SearchBar />
            </div>
        </div>
    ); 
}

ReactDOM.render(<App />, document.querySelector('.container'));