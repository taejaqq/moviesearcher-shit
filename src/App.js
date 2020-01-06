import React from 'react';
import Mainpage from "./containers/Mainpage";
import {Route, Switch} from "react-router-dom";
import MovieDetails from "./containers/MovieDetails";
import Header from "./components/Header";
import MyContact from "./components/MyContact";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={Mainpage}/>
                <Route path="/movie/:userId"
                       component={MovieDetails}
                       render={props => <MovieDetails {...props} key={this.props.location.key}/>}/>
                <Route path="/contact" component={MyContact}/>
            </Switch>
        </div>
    )
}

export default App;
