import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import AddForm from '../Form/CreateStore'
import StoreItem from '../Stores/StoreItem';


class AccountMain extends React.Component {
    constructor(props) {
        super(props)

        this.deleteStore = this.deleteStore.bind(this)
    }
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
                            deleteStore={this.deleteStore}
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

    deleteStore(storeid) {
        this.props.deleteStore(storeid)

    }

    render() {
        return (
                <div className="account-container">
                    <AddForm  />
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
