import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {allJobsSelector} from '../../reducers/jobs';
import * as actions from '../../actions/jobs';
import JobList from './JobList';
import TopNavigation from '../navigation/TopNavigation';
import AddJobCtA from '../ctas/AddJobCtA';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.onJobClick = this.onJobClick.bind(this);
    }

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = props => {
        props.fetchJobs();
    };

    onJobClick = (job) => {
        if (this.props.isAuthenticated) {
            this.props.history.push(`/authjob/ + ${job._id}`);
        } else {
            this.props.history.push(`/job/ + ${job._id}`);
        }
    };

    render() {
        return (
            <div className="home-page">
                <TopNavigation/>
                <h1>REMOTE CAREER JOBS</h1>
                {this.props.isAuthenticated && <AddJobCtA/>}
                <JobList onJobClick={this.onJobClick} jobs={this.props.jobs}/>
            </div>
        )
    }
}

HomePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
};


function mapStateToProps(state) {
    return {
        jobs: allJobsSelector(state),
        isAuthenticated: !!state.user.token
    }
}

const mapDispatchToProps = {fetchJobs: actions.fetchJobs};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
