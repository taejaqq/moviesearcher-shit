import React from 'react';
import {DebounceInput} from "react-debounce-input";

const SearchMovieBar = ({getQuery}) => {
    return (
        <DebounceInput onChange={getQuery}
                       debounceTimeout={50}
                       minLength={2}/>
    )
};

export default SearchMovieBar;
