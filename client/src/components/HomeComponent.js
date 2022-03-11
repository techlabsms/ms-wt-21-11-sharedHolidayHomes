import React from 'react';
import Card from './Favorites';
import Search from './search/Search';

function Home() {
    return (
        <div>
            <Search />
            <Card />
        </div>
    );
}

export default Home;