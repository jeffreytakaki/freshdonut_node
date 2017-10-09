import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'react-bootstrap';

class Header extends React.Component {
    renderContent() {
        console.log(this.props.auth)
        switch(this.props.auth) {
            case Object.keys(this.props.auth).length === 0:
                return;
            case false:
                return (
                        <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return [
                    <li key="2"><a href="/api/logout">logout</a></li>
                ]
        }
    }
    render() {
        return (
                <header className="header">
                    <div className="">Header section
                        <ul>
                            {this.renderContent()}
                        </ul>
                    </div>
                </header>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props
    console.log(state)
    return { auth: state.auth }
}


export default connect(mapStateToProps)(Header); //connect Header to store
