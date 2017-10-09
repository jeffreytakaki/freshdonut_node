import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
import 'react-bootstrap';
import './App.css';

import Header from './Header/Header'
import Stores from './Stores/Stores'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (

                <div className="container">
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route path="/" component={Stores} exact={true} />
                        </div>

                    </BrowserRouter>
                </div>
        );
    }
}

export default connect(null, actions)(App) //connect App to store, along with actions
