import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>Home Page</h1>
        { isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link> }
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return {
        isAuthenticated: !!state.user.token
    }
}

const mapDispatchToProps = { logout: actions.logout };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
