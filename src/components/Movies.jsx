import React from 'react';
import {StyledGridContainer} from "../styled/Styles";
import MovieItem from "./MovieItem";
import {connect} from "react-redux";
import ButtonPage from "./ButtonPage";

const Movies = (props) => {
    const {
        nextPage, prevPage,
        films
    } = props;

    return (
        <StyledGridContainer>
            {films.map(film => (
                <MovieItem key={film.id} film={film}/>
            ))}
            {props.total_pages > 1 ?
                <ButtonPage
                    nextPage={nextPage}
                    prevPage={prevPage}>
                </ButtonPage> :
                <div style={{textAlign: "center"}}>No results</div>
            }
        </StyledGridContainer>
    )
};

const mapStateToProps = (state) => {
    return {
        movieCardInfo: state.mainPage.movieCardInfo,
    }
};

export default connect(mapStateToProps, {})(Movies);
