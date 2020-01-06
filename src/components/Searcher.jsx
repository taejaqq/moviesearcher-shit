import React from 'react';
import {DebounceInput} from "react-debounce-input";
import {StyledGridContainer, StyledSearcher} from "../styled/Styles";

const Searcher = ({getQuery}) => {
    return (
        <StyledGridContainer>
            <DebounceInput onChange={getQuery}
                           debounceTimeout={50}
                           element={StyledSearcher}
                           minLength={2}/>
        </StyledGridContainer>
    )
};

export default Searcher;
