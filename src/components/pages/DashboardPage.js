import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allItemsSelector } from '../../reducers/items';
import LoadingHOC from '../HOC/LoadingHOC'

class DashboardPage extends React.Component {
    componentDidMount = () => this.onInit(this.props);

    render() {
        const {items} = this.props;
        return (
            <div>
                {items.length}
            </div>
        );
    }
}

DashboardPage.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};

function mapStateToProps(state) {
    return {
        items: allItemsSelector(state)
    }
}

export default connect(mapStateToProps)(LoadingHOC('items')(DashboardPage));
