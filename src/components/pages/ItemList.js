import React from 'react';
import PropTypes from 'prop-types';
import LoadingHOC from '../HOC/LoadingHOC'

const ItemList = ({items}) => {

    return (
        <ul>
            {items.map(
                (item, i) => <li key='i'>
                    <div className='itemData'>
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

export default LoadingHOC('items')(ItemList);