import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';

const TopNavigation = ({isAuthenticated, user, logout}) => (
    <div>
        <div className='ui pointing secondary menu'>
            <a className='active item'>Programming jobs</a>
            <a className='item'>Copywriting</a>
            { isAuthenticated &&
            <div className='right menu'>
                <img alt='' className='ui circular image' src='/img/patrick.png'/>
                <span className='item'>{user.username}</span>
                <a className='item' role='link' onClick={() => logout()}>Logout</a>
            </div>
            }
            { !isAuthenticated &&
            <div className='right menu'>
                <a className='item' role='link' href="/login">Login</a>
            </div>
            }
        </div>
    </div>
);

TopNavigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user,
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, {logout: actions.logout})(TopNavigation);
