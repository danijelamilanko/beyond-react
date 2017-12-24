import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {allJobsSelector} from '../../reducers/jobs';
import * as actions from '../../actions/jobs';
import JobList from './JobList';
import TopNavigation from '../navigation/TopNavigation';


class HomePage extends React.Component {

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = props => {
        props.fetchJobs();
    };

    render() {
        return (
            <div className="home-page">
                <TopNavigation/>
                <h1>REMOTE CAREER JOBS</h1>
                <JobList jobs={this.props.jobs}/>
            </div>
        )
    }
}

HomePage.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
};


function mapStateToProps(state) {
    return {
        jobs: allJobsSelector(state)
    }
}

const mapDispatchToProps = {fetchJobs: actions.fetchJobs};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
