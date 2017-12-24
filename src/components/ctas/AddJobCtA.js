import React from 'react';
import {Card} from "semantic-ui-react";
import {Link} from "react-router-dom";

const AddJobCtA = () => (
    <Card centered>
        <Card.Content textAlign="center">
            <Link to="/job/new">
                Add new job
            </Link>
        </Card.Content>
    </Card>
);

export default AddJobCtA;