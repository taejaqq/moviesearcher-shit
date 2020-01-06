import React from "react";
import {connect} from "react-redux";
import {getMovieDetailsThunk} from "../reducers/mainpage-reducer";
import MovieDescription from "../components/MovieDescription";
import {StyledGridContainer, StyledGridItem} from "../styled/Styles";

class MovieDetails extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const {match: {params}} = this.props;
        this.props.getMovieDetailsThunk(params.userId);
    }

    render() {
        const style = {width: "500px", margin: "0 auto"};
        const movieDetailsProps = this.props.movieDetailsInfo;
        if (movieDetailsProps === null) return null;

        console.log(this.props);

        return (
            <StyledGridItem>
                <StyledGridContainer style={style}>
                    <MovieDescription details={movieDetailsProps}/>
                </StyledGridContainer>
            </StyledGridItem>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetailsInfo: state.mainPage.movieDetailsInfo
    }
};

export default connect(mapStateToProps, {getMovieDetailsThunk})(MovieDetails)
