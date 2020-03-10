import React from 'react';

const TopRest30 = ({data}) => {

    return <div>
        <h1>Top rest 30 movies</h1>
        <ul>
            {data.map(movie => <li key={movie.id}>{movie.id}: {movie.title}</li>)}
        </ul>
    </div>;

};

export default TopRest30;
