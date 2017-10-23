import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import StoreItem from '../Stores/StoreItem';


class AccountMain extends React.Component {
    componentWillMount() {
        this.props.getUserStores()
    }

    renderStores() {
        if(this.props.userStores.length > 0) {
            let collection = this.props.userStores;
            let stores = collection.map((store) =>

                    <StoreItem
                            key={Math.ceil(Math.random()*100)}
                            storeId={store.id}
                            name={store.name}
                            description={store.description}
                    />

            )

            return (
                    <div className="stores-list-container">{stores}</div>
            )
        } else {
            return (
                    <div className="stores-list-container">You have no stores</div>
            )
        }

    }

    deleteStore(id) {
        this.props.deleteStore(id)
    }

    render() {

        return (
                <div className="account-container">
                    <h1>hello, from the other side</h1>
                    {this.renderStores()}
                </div>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props
    return {
        auth: state.auth,
        userStores: state.userStores
    }
}




export default connect(mapStateToProps, actions)(AccountMain); //connect Header to store
