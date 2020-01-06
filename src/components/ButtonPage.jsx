import React from 'react';
import {StyledButton, StyledGridContainer} from "../styled/Styles";

const ButtonPage = ({prevPage, nextPage}) => {
    return (
        <StyledGridContainer>
            <StyledButton onClick={prevPage}>PREV PAGE</StyledButton>
            <StyledButton onClick={nextPage} px="10px">NEXT PAGE</StyledButton>
        </StyledGridContainer>
    )
};

export default ButtonPage;
