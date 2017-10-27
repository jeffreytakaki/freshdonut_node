import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import AddForm from '../Form/CreateStore'

class Store extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            storeitem: ''
        }


    }


    componentWillMount() {
        let stores = this.props.userStores
        let findstore = (stores.length) ?
                findStoreFromState(this.props.location.pathname, this.props.userStores) :
                false;
        if(findstore) {
            this.setState({
                storeitem: findstore
            })
        }

    }

    render() {
        return (
                <div className="stores-container">
                    <h1>hello</h1>
                    <AddForm storeitem={this.state.storeitem} />
                </div>
        );
    }
}


function findStoreFromState(storeid, state) {

    let store = storeid.replace('/store/', '');
    let save = false;

    state.forEach(function(value){
        if(value._id == store) {
            save = value;
        }
    })

    return save;

}


function mapStateToProps(state) {
    // get state from store and pass into Header as props
    console.log('mapstatetoprops', state.userStores)
    return {
        userStores: state.userStores
    }
}
export default connect(mapStateToProps)(Store); //connect Header to store
