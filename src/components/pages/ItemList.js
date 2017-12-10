import React from 'react';
import PropTypes from 'prop-types';
import {Table, Menu, Icon} from 'semantic-ui-react';
import LoadingHOC from '../hoc/LoadingHoc';

const ItemList = ({items, user}) => {
    const userItems = items.filter(item => item.user_id === user._id);

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {userItems.map(
                    (item) => <Table.Row key={item._id}>
                        <Table.Cell>{item.name}</Table.Cell>
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

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    user: PropTypes.object.isRequired
};

export default LoadingHOC('items')(ItemList);