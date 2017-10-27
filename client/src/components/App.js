import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import 'react-bootstrap';
import './App.css';

import Header from './Header/Header'
import Stores from './Stores/Stores'
import Store from './Stores/Store'
import AccountMain from './Account/AccountMain'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        //this.props.getStores();
        //this.props.getUserStores();
    }

    render() {
        return (

                <div className="container-fluid">
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route path="/" component={Stores} exact={true} />
                            <Route path="/account" component={AccountMain} exact={true}/>
                            <Route path="/store/:id" component={Store} exact={true}/>

                        </div>

                    </BrowserRouter>
                </div>
        );
    }
}

export default connect(null, actions)(App) //connect App to store, along with actions
