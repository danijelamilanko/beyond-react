import React from 'react';
import PropTypes from 'prop-types';
import {Table, Menu, Icon} from 'semantic-ui-react';
import LoadingHOC from '../hoc/LoadingHoc';

const JobList = ({jobs, user}) => {
    let userJobs = [];
    if (user === null) {
        userJobs = jobs;
    } else {
        userJobs = jobs.filter(job => job.user_id === user._id);
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {userJobs.map(
                    (job) => <Table.Row key={job._id}>
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
};

JobList.defaultProps = {
    user: null
};

JobList.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LoadingHOC('jobs')(JobList);