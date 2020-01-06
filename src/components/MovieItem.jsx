import React from 'react';
import {StyledGridItem, StyledGridListTile, StyledGridListTileBar, StyledLink} from "../styled/Styles";

const MovieItem = (props) => {
    const {film} = props;
    const path = `http://image.tmdb.org/t/p/w342/`;
    const imageNotFound = "https://www.carnival.com/_ui/responsive/ccl/assets/images/notfound_placeholder.svg";
    const imagePath = film.poster_path ? `${path}${film.poster_path}` : imageNotFound;

    return(
        <StyledGridItem>
            <StyledGridListTile>
                <StyledLink to={{
                    pathname: `/movie/${film.id}`,
                    state: { id: film.id }
                }}>
                    <img src={imagePath}
                         alt={film.title}
                         width="342"
                         height="513"/>
                </StyledLink>
                <StyledGridListTileBar
                    title={film.title}/>
            </StyledGridListTile>
        </StyledGridItem>
    )
};

export default MovieItem;
