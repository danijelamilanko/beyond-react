import React from 'react';
import PropTypes from 'prop-types';
import {Table, Menu, Icon} from 'semantic-ui-react';
import LoadingHOC from '../hoc/LoadingHoc';

class JobList extends React.Component {

    render() {
        this.userJobs = [];
        if (this.props.user === null) {
            this.userJobs = this.props.jobs;
        } else {
            this.userJobs = this.props.jobs.filter(job => job.user_id === this.props.user._id);
        }
        this.onJobClick = this.props.onJobClick;

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.userJobs.map(
                        (job) => <Table.Row key={job._id} onClick={() => this.onJobClick(job)}>
                            <Table.Cell>{job.name}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='left chevron'/>
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='right chevron'/>
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    }
}

JobList.defaultProps = {
    user: null
};

JobList.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object).isRequired,
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }),
    onJobClick: PropTypes.func.isRequired
};

export default LoadingHOC('jobs')(JobList);