import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
        <h2>Check Out My Favorite Things</h2>
        <ul>
            <li>
                <Link to={`${match.url}/Honda`}>Car</Link>
            </li>
            <li>
                <Link to={`${match.url}/steak`}>Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/Resident Evil`}>Movie</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:favoriteThingsId`} component={Things} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Select a link above</h3>}
        />
    </div>
);

export default FavoriteThings;