import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingHOC from '../HOC/LoadingHOC'

const ItemList = ({items}) => {

    return (
        <ul>
            {items.map(
                (item) => <li>
                    <div className="itemData">
                        <strong>{item.name}</strong>
                    </div>
                </li>
            )}
        </ul>
    )
};

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect()(LoadingHOC('items')(ItemList));