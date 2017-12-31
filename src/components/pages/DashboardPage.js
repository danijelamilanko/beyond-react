import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {allJobsSelector} from '../../reducers/jobs';
import * as actions from '../../actions/jobs';
import JobList from './JobList';
import TopNavigation from '../navigation/TopNavigation';
import AddJobCtA from '../ctas/AddJobCtA';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.onJobClick = this.onJobClick.bind(this);
    }

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = () => {
        this.props.fetchJobsAuth();
    };

    onJobClick = (job) => {
        this.props.history.push(`/job/ + ${job._id}`);
    };

    render() {
        return (
            <div className="dashboard-page">
                <TopNavigation/>
                <h1>REMOTE CAREER JOBS</h1>
                <AddJobCtA/>
                <JobList onJobClick={this.onJobClick} jobs={this.props.jobs} user={this.props.user}/>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardPage));
