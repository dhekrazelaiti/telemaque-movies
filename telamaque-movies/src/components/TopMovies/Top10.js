import React from 'react';

const Top10 = ({data}) => {

    return <div>
        <h1>Top 10 movies</h1>
        <ul>
            {data.map(movie => <li key={movie.id}>{movie.id}: {movie.title}</li>)}
        </ul>
    </div>;

};

export default Top10;
