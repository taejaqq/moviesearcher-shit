import React from "react";
import {getPopularThunk, searchMoviesThunk} from "../reducers/mainpage-reducer";
import {connect} from "react-redux";
import {StyledGridItem} from "../styled/Styles";
import Searcher from "../components/Searcher";
import Movies from "../components/Movies";

class Mainpage extends React.Component {
    componentDidMount() {
        this.props.getPopularThunk();
    }

    getQuery = e => {
        const value = e.target.value.toLowerCase();
        this.props.searchMoviesThunk(value);
    };

    prevPage = () => {
        const {total_pages, page, filter} = this.props.mainPage;
        const {searchMoviesThunk} = this.props;
        let prev = page;
        if (page <= 1) {
            searchMoviesThunk(filter, total_pages)
        } else {
            prev--;
            searchMoviesThunk(filter, prev);
        }
    };

    nextPage = () => {
        const {total_pages, page, filter} = this.props.mainPage
        const {searchMovies} = this.props;
        let next = page;

        if (page >= total_pages) {
            searchMovies(filter)
        } else {
            next++;
            searchMovies(filter, next)
        }
    };

    render() {
        const results = this.props.results;
        if (results === null) return null;
        // const movieList = movieCardProps.map(v => (<Link to={{
        //     pathname: `/movie/${v.id}`,
        //     state: { id: v.id }
        // }} key={v.id}><Movie info={v} key={v.id}/></Link>));

        return (
            <StyledGridItem>
                <Searcher getQuery={this.getQuery}/>
                <Movies films={results}
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}/>
            </StyledGridItem>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.mainPage.results,
        movieCardInfo: state.mainPage.movieCardInfo,
        filter: state.mainPage.filter
    }
};

export default connect(mapStateToProps, {getPopularThunk, searchMoviesThunk})(Mainpage);
