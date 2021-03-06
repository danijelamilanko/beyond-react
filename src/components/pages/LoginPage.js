import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../forms/LoginForm';
import {login} from '../../actions/auth';

class LoginPage extends React.Component {

    submit = data =>
        this.props.login(data).then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <div className='login-page'>
                <h1>REMOTE CAREER JOBS</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

const mapDispatchToProps = {login};

export default connect(null, mapDispatchToProps)(LoginPage);
