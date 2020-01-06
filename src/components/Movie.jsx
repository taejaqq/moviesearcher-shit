import React from "react";

const Movie = (props) => {
    return <div>
        <img src={`https://image.tmdb.org/t/p/w300/${props.info.poster_path}`}/>
    </div>
};

export default Movie;
