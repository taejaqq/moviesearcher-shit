import React, {Fragment} from "react";
import {StyledDivider, StyledGridItem, StyledTypography} from "../styled/Styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";

const MovieDescription = ({details}) => {
    const genresArray = details.genres;
    const genresNewArray = genresArray.map(g => (g.name));
    console.log(genresNewArray);
    const path = `https://image.tmdb.org/t/p/w780/`;
    const imageNotFound = "https://www.carnival.com/_ui/responsive/ccl/assets/images/notfound_placeholder.svg";
    const imagePath = details.backdrop_path ? `${path}${details.backdrop_path}` : imageNotFound;

    return (
        <StyledGridItem xs={12}>
            <Card>
                <CardMedia image={imagePath}
                           title={details.title}
                           style={{height: "500px"}}/>
                <CardContent>
                    <StyledTypography gutterBottom variant="title" component="h2">
                        {details.title}
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        {details.overview}
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        Genres: {genresNewArray.join(', ')}
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        Budget: {details.budget + "$"}
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        AVR Rating: {details.vote_average} (the number of votes {details.vote_count})
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        Tagline: {details.tagline}
                    </StyledTypography>
                    <StyledDivider/>
                    <StyledTypography>
                        Release date: {details.release_date}
                    </StyledTypography>
                </CardContent>
            </Card>
        </StyledGridItem>
    )
};

export default MovieDescription;
