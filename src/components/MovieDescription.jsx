import React, {Fragment} from "react";

const MovieDetailsCard = (props) => {
    const genresArray = props.details.genres;
    const genresNewArray = genresArray.map(g => (g.name));
    console.log(genresNewArray);

    return (
        <Fragment>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400/${props.details.poster_path}`}/>
                </div>
                <div>{props.details.original_title}</div>
                <div>{props.details.overview}</div>
                <div>{genresNewArray.join(', ')}</div>
                <div>{props.details.budget}</div>
                <div>{props.details.vote_average}</div>
                <div>{props.details.tagline}</div>
                <div>{props.details.release_date}</div>
            </div>
        </Fragment>
    )
};

export default MovieDetailsCard;
