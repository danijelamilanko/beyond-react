import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { allItemsSelector } from '../../reducers/items';
import AddItemCta from '../ctas/AddItemCta'

const DashboardPage = ({items}) => (
    <div>
        {items.length === 0 && <AddItemCta/>}
    </div>
);

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

export default connect(mapStateToProps)(DashboardPage);
