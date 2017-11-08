import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    renderContent() {
        switch(this.props.auth) {
            case Object.keys(this.props.auth).length === 0:
                return;
            case false:
                return (
                        <div key="1" className="col-sm-4"><a href="/auth/google" className="btn btn-primary" >Login with Google</a></div>
                )
            default:
                return [
                    <div key="1" className="col-6 col-sm-4" ><Link to="/account" className="btn btn-primary">Account</Link></div>,
                    <div key="2" className="col-6 col-sm-4 logout"><a href="/api/logout" >Logout</a></div>
                ]
        }
    }
    render() {
        return (
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-8 order-sm-2">
                                <div className="row account-container">
                                    {this.renderContent()}
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 order-sm-1 logo-container">
                                <div className="logo">
                                    <Link to="/"><img src="/images/freshdonut_logo.png" alt="Fresh Donut"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props
    return { auth: state.auth }
}


export default connect(mapStateToProps)(Header); //connect Header to store
