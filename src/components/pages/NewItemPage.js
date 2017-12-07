import React from 'react';
import { Segment } from 'semantic-ui-react';

class NewItemPage extends React.Component {

    state = {
        item: null
    };

    render() {
        return (
            <Segment>
                <h1>Add new item</h1>
            </Segment>
        );
    }
}

export default NewItemPage;
