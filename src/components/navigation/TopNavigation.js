import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const TopNavigation = ({ user, logout }) => (
    <div>
        <div className='ui pointing secondary menu'>
            <a className='active item'>Home</a>
            <a className='item'>Messages</a>
            <a className='item'>Friends</a>
            <div className='right menu'>
                <img alt='' className='ui circular image' src='/img/patrick.png' />
                <span className='item'>{user.username}</span>
                <a className='item' role='link' onClick={() => logout()}>Logout</a>
            </div>
        </div>
        <div className='ui segment'>
            <img alt='' src='/assets/images/wireframe/media-paragraph.png' />
        </div>
    </div>
);

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopNavigation);
