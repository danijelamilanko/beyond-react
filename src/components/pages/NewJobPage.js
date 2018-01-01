import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Segment} from 'semantic-ui-react';
import JobForm from '../forms/JobForm';
import TopNavigation from '../navigation/TopNavigation';
import {createJob} from '../../actions/jobs';

class NewJobPage extends React.Component {
    state = {};

    addJob = job =>
        this.props
            .createJob(job)
            .then(() => this.props.history.push('/dashboard'));

    render() {
        return (
            <div className='add-job-page'>
                <TopNavigation/>
                <h1>Add new job</h1>
                <Segment>
                    <JobForm submit={this.addJob}/>
                </Segment>
            </div>
        );
    }
}

NewJobPage.propTypes = {
    createJob: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect(null, {createJob})(NewJobPage);