import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import AddForm from '../Form/CreateStore'
import AddDonutForm from '../Form/CreateDonut'

import DonutItem from './DonutItem';

class Store extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            storeitem: ''
        }

        this.renderDonuts = this.renderDonuts.bind(this)


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
    renderDonuts(storeitem) {

        if(this.state.storeitem) {
            let collection = this.state.storeitem.donuts;
            let donuts = collection.map((donut) =>

                    <DonutItem
                            key={Math.ceil(Math.random()*100)}
                            name={donut.name}
                            description={donut.description}

                    />

            )

            return (
                    <div className="row donut-list-container">{donuts}</div>
            )
        } else {
            return (
                    <div className="donut-list-container">You have no stores</div>
            )
        }


    }

    render() {
        return (
                <div className="stores-container">
                    <h1>{this.state.storeitem.name}</h1>
                    <AddForm storeitem={this.state.storeitem} />
                    <AddDonutForm storeitem={this.state.storeitem}/>
                    { this.renderDonuts(this.state.storeitem) }

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
