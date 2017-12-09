import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NewItemPage from './components/pages/NewItemPage';
import DashboardPage from './components/pages/DashboardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import './App.css';

const App = ({ location, isAuthenticated }) => (
    <div className="ui container">
        {isAuthenticated && <TopNavigation/>}
        <Route location={location} path="/" exact component={HomePage} />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
        <UserRoute location={location} path="/items/new" exact component={NewItemPage} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.email
    }
}

export default connect(mapStateToProps)(App);
