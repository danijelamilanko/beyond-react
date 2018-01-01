import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Segment} from 'semantic-ui-react';
import {allJobsSelector} from '../../reducers/jobs';
import TopNavigation from '../navigation/TopNavigation';
import * as actions from '../../actions/jobs';

class JobPage extends React.Component {

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = () => {
        this.props.fetchJob(this.props.location.pathname.replace('/job/', ''));
    };

    render() {
        return (
            <div className='job-page'>
                <TopNavigation/>
                <h1>Job</h1>
                <Segment>
                    {this.props.jobs.map(
                        (job) => <p key={job._id}>{job.name}</p>
                    )}
                    {this.props.isAuthenticated && ''}
                </Segment>
            </div>
        );
    }
}

JobPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    fetchJob: PropTypes.func.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        jobs: allJobsSelector(state),
        isAuthenticated: !!state.user.token
    }
}

const mapDispatchToProps = {fetchJob: actions.fetchJob};


export default connect(mapStateToProps, mapDispatchToProps)(JobPage);