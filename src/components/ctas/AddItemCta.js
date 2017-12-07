import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AddBookCta = () => (
    <Card centered>
        <Card.Content textAlign="center">
            <Card.Header>Add new item</Card.Header>
            <Link to="/items/new"><Icon name="plus circle"/></Link>
        </Card.Content>
    </Card>
);

export default AddBookCta;
