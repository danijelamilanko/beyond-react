import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {allJobsSelector} from '../../reducers/jobs';
import * as actions from '../../actions/jobs';
import JobList from './JobList';
import TopNavigation from '../navigation/TopNavigation';
import AddJobCtA from '../ctas/AddJobCtA';

class DashboardPage extends React.Component {

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = props => {
        props.fetchJobsAuth();
    };

    render() {
        return (
            <div className="dashboard-page">
                <TopNavigation/>
                <h1>REMOTE CAREER JOBS</h1>
                <AddJobCtA/>
                <JobList jobs={this.props.jobs} user={this.props.user}/>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    fetchJobsAuth: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        jobs: allJobsSelector(state),
        user: state.user
    }
}

const mapDispatchToProps = {fetchJobsAuth: actions.fetchJobsAuth};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
