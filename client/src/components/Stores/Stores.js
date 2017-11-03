import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import StoreItem from './StoreItem';

class Stores extends React.Component {
    constructor(props) {
        super(props)

        this.renderStores = this.renderStores.bind(this)
        this.state = {
            storelist: [
                {name: 'jffrey', description: 'cookie heaven', doodad: 123},
                {name: 'dhyana', description: 'book nerd', doodad: 234}
            ]
        }
    }


    componentDidMount() {
        this.props.getStores();
    }

    renderStores() {
        if(this.props.stores.length > 0) {
            let collection = this.props.stores;
            let stores = collection.map((store) =>

                <StoreItem
                    key={Math.ceil(Math.random()*100)}
                    name={store.name}
                    description={store.description}
                    showaccount = {false}
                />

            )

            return (
                    <div className="row stores-list-container">{stores}</div>
            )
        } else {
            return (
            <div className="stores-list-container">You have no stores</div>
            )
        }

    }

    render() {
        return (
                <div className="stores-container">
                    <div className="">
                        Stores Section
                    </div>

                    {this.renderStores()}
                </div>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props

    return {
        stores: state.stores
    }
}


export default connect(mapStateToProps, actions)(Stores); //connect Header to store
