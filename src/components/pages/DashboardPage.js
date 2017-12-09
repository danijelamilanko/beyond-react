import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {allItemsSelector} from '../../reducers/items';
import LoadingHOC from '../HOC/LoadingHOC'
import * as actions from '../../actions/items';

class DashboardPage extends React.Component {

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

const mapDispatchToProps = { fetchItems: actions.fetchItems };

export default connect(mapStateToProps, mapDispatchToProps)(LoadingHOC('items')(DashboardPage));
