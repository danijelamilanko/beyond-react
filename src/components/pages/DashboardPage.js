import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {allJobsSelector} from '../../reducers/jobs';
import * as actions from '../../actions/jobs';
import JobList from './JobList';

class DashboardPage extends React.Component {

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = props => {
        props.fetchJobs();
    };

    render() {
        return (
            <div>
                <h1>REMOTE CAREER JOBS</h1>
                <JobList jobs={this.props.jobs} user={this.props.user}/>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    fetchJobs: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        jobs: allJobsSelector(state),
        user: state.user
    }
}

const mapDispatchToProps = { fetchJobs: actions.fetchJobs };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
