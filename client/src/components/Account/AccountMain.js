import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AddForm from '../Form/CreateStore'
import StoreItem from '../Stores/StoreItem';


class AccountMain extends React.Component {
    constructor(props) {
        super(props)

        this.deleteStore = this.deleteStore.bind(this)
        this.addStore = this.addStore.bind(this)
    }
    componentDidMount() {
        console.log('componentDidMount', this.props.userStores)
        this.props.getUserStores()
    }

    renderStores() {
        if(this.props.userStores.length > 0) {
            let collection = this.props.userStores;
            let stores = collection.map((store) =>

                    <StoreItem
                            key={store._id}
                            storeId={store._id}
                            name={store.name}
                            description={store.description}
                            deleteStore={this.deleteStore}
                            showaccount={true}
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

    addStore(store) {
        this.props.addStore(store)
    }
    deleteStore(storeid) {
        this.props.deleteStore(storeid)

    }

    render() {
        console.log('render function', this.props.userStores)
        return (
                <div className="account-container">
                    <AddForm addUserStore={this.addStore} />
                    {this.renderStores()}
                </div>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props
    console.log('mapStateToProps User Stores =>', state)
    return {
        auth: state.auth,
        userStores: state.userStores
    }
}




export default connect(mapStateToProps, actions)(AccountMain); //connect Header to store
