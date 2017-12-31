import React from "react";
import {connect} from "react-redux";
import {Segment} from "semantic-ui-react";
import TopNavigation from '../navigation/TopNavigation';

class JobPage extends React.Component {
    state = {};

    render() {
        return (
            <div className="job-page">
                <TopNavigation/>
                <h1>Job</h1>
                <Segment>
                    ..
                </Segment>
            </div>
        );
    }
}

JobPage.propTypes = {
};

export default connect(null, null)(JobPage);