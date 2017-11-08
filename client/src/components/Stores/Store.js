import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import AddForm from '../Form/CreateStore'
import AddDonutForm from '../Form/CreateDonut'
import {findStoreFromState} from '../../Helpers/findStore'

import DonutItem from './DonutItem';

class Store extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            storeitem: ''
        }

        this.renderDonuts = this.renderDonuts.bind(this)
        this.addStore = this.addStore.bind(this)
        this.addDonut = this.addDonut.bind(this)
    }

    componentWillMount() {
        let stores = this.props.userStores;
        let findstore = (stores.length) ?
                findStoreFromState(this.props.location.pathname, this.props.userStores) :
                false;
        if(findstore) {
            this.setState({
                storeitem: findstore
            })
        }
    }

    addStore(store) {
        this.props.addStore(store)
    }

    addDonut(donut) {

        this.props.addDonut(donut)
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
            return (<div className="row donut-list-container">{donuts}</div>)
        } else {
            return (<div className="donut-list-container">You have no donuts!</div>)
        }
    }

    render() {
        return (
                <div className="stores-container">
                    <h1>{this.state.storeitem.name}</h1>
                    <AddForm addUserStore={this.addStore} storeitem={this.state.storeitem} />
                    <AddDonutForm addUserDonut={this.addDonut} storeitem={this.state.storeitem}/>
                    { this.renderDonuts(this.state.storeitem) }

                </div>
        );
    }
}


function mapStateToProps(state) {
    // get state from store and pass into Header as props
    console.log('mapstatetoprops', state.userStores)
    return {
        userStores: state.userStores
    }
}
export default connect(mapStateToProps, actions)(Store); //connect Header to store
