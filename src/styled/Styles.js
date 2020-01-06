import styled from "styled-components";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {GridListTile, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";


export const StyledGridContainer = styled(Grid).attrs({
    container: true,
    spacing: 5,
    justify: "center"
})`
    && {
        margin-bottom: 3px;
    }
`;

export const StyledGridItem = styled(Grid).attrs({item: true})`
    && {
        margin-top: 8px;
        overflow: hidden;
    }
`;

export const StyledGridListTileBar = styled(GridListTileBar).attrs({
    titlePosition: "bottom",
    actionPosition: "right"
})``;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: red;
    &:hover {
        background: yellow;
    }
`;


export const StyledGridListTile = styled(GridListTile)`
    list-style-type: none;
`;

export const StyledSearcher = styled(TextField).attrs({
    label: "Search movies..",
    type: "search"
})`
  && {
  width: 450px;
  margin-top: 40px;
  margin-bottom: 15px; 
`;

export const StyledTypography = styled(Typography).attrs({
    component: props => props.component || "p",
    variant: props => props.variant || "subheading"
})`
    && {
        margin-top: 8px;
    } 
`;

export const StyledDivider = styled(Divider).attrs({
    light: true
})`
    && {
        margin-top: 10px;
    }
`;


export const StyledButton = styled(Button).attrs({
    variant: "raised",
    color: "primary",
    marginleft: props => props.px
})`
    && {
        margin-left: ${props => props.marginleft};
        margin-top: 10px;
    }
`;
