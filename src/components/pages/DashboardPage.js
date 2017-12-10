import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {allItemsSelector} from '../../reducers/items';
import * as actions from '../../actions/items';
import ItemList from './ItemList';

class DashboardPage extends React.Component {

    componentDidMount = () => {
        this.onInit(this.props);
    };

    onInit = props => {
        props.fetchItems();
    };

    render() {
        return (
            <div>
                <ItemList items={this.props.items} user={this.props.user}/>
            </div>
        );
    }
}

DashboardPage.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    fetchItems: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        items: allItemsSelector(state),
        user: state.user
    }
}

const mapDispatchToProps = { fetchItems: actions.fetchItems };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
