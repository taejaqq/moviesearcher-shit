import React from "react";
import {connect} from "react-redux";
import {getMovieDetailsThunk} from "../reducers/mainpage-reducer";

class MovieDetails extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const {match: {params}} = this.props;
        this.props.getMovieDetailsThunk(params.userId);
    }

    render() {
        const movieDetailsProps = this.props.movieDetailsInfo;
        if (movieDetailsProps === null) return null;

        console.log(this.props);
        return <div>{movieDetailsProps.original_title}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetailsInfo: state.mainPage.movieDetailsInfo
    }
};

export default connect(mapStateToProps, {getMovieDetailsThunk})(MovieDetails)
